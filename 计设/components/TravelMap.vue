<template>
  <div class="travel-map">
    <div ref="chartRef" class="chart-container"></div>
    
    <!-- 城市选择侧边栏 -->
    <div v-if="showDrawer" class="drawer-overlay active" @click="closeDrawer">
      <div class="drawer" @click.stop>
        <div class="drawer-header">
          <h2>{{ currentProvince }}</h2>
          <button class="close-btn" @click="closeDrawer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="drawer-content">
          <div class="city-list">
            <div v-for="city in cities" :key="city" class="city-item">
              <input 
                type="checkbox" 
                :id="city" 
                :checked="selectedCities.includes(city)"
                @change="toggleCity(city)"
              >
              <label :for="city">{{ city }}</label>
            </div>
          </div>
        </div>
        <div class="drawer-footer">
          <button class="btn btn-primary" @click="confirmSelection">确认选择</button>
          <button class="btn btn-secondary" @click="closeDrawer">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, watch } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chartInstance = null

// 状态管理
const showDrawer = ref(false)
const currentProvince = ref('')
const selectedCities = ref([])
const activatedProvinces = ref(new Set())

// 从localStorage加载数据
const loadFromLocalStorage = () => {
  try {
    const savedActivated = localStorage.getItem('activatedProvinces')
    const savedStarPoints = localStorage.getItem('starPoints')
    
    if (savedActivated) {
      activatedProvinces.value = new Set(JSON.parse(savedActivated))
    }
    
    if (savedStarPoints) {
      starPoints.value = JSON.parse(savedStarPoints)
    }
  } catch (error) {
    console.error('从localStorage加载数据失败:', error)
  }
}

// 保存数据到localStorage
const saveToLocalStorage = () => {
  try {
    localStorage.setItem('activatedProvinces', JSON.stringify([...activatedProvinces.value]))
    localStorage.setItem('starPoints', JSON.stringify(starPoints.value))
  } catch (error) {
    console.error('保存数据到localStorage失败:', error)
  }
}

// 模拟城市数据
const provinceCities = {
  '北京': ['东城区', '西城区', '朝阳区', '海淀区', '丰台区'],
  '上海': ['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区'],
  '广东': ['广州', '深圳', '珠海', '佛山', '东莞'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '江苏': ['南京', '苏州', '无锡', '常州', '徐州'],
  '四川': ['成都', '绵阳', '德阳', '自贡', '泸州'],
  '湖北': ['武汉', '襄阳', '宜昌', '荆州', '黄石'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳'],
  '山东': ['济南', '青岛', '烟台', '潍坊', '济宁'],
  '河北': ['石家庄', '唐山', '邯郸', '保定', '秦皇岛'],
  '河南': ['郑州', '洛阳', '开封', '安阳', '新乡'],
  '陕西': ['西安', '宝鸡', '咸阳', '铜川', '渭南'],
  '福建': ['福州', '厦门', '泉州', '漳州', '莆田'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山'],
  '江西': ['南昌', '九江', '赣州', '宜春', '抚州'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪'],
  '吉林': ['长春', '吉林', '四平', '辽源', '通化'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '牡丹江', '佳木斯', '大庆'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通'],
  '贵州': ['贵阳', '遵义', '安顺', '六盘水', '毕节'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海'],
  '海南': ['海口', '三亚', '儋州', '琼海', '文昌'],
  '重庆': ['渝中区', '江北区', '沙坪坝区', '九龙坡区', '南岸区'],
  '天津': ['和平区', '河东区', '河西区', '南开区', '河北区'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水'],
  '青海': ['西宁', '海东', '海北', '黄南', '海南'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番', '哈密', '昌吉'],
  '西藏': ['拉萨', '日喀则', '昌都', '林芝', '山南'],
  '台湾': ['台北', '高雄', '台中', '台南', '新北'],
  '香港': ['中西区', '东区', '南区', '湾仔区', '九龙城区'],
  '澳门': ['澳门半岛', '氹仔', '路环']
}

// 获取当前省份的城市列表
const cities = ref([])

// 星光点数据
const starPoints = ref([])

// 省份中心坐标（简化版）
const provinceCenters = {
  '北京': [116.4, 39.9],
  '上海': [121.4, 31.2],
  '广东': [113.2, 23.1],
  '浙江': [120.2, 30.3],
  '江苏': [118.8, 32.1],
  '四川': [104.1, 30.7],
  '湖北': [114.3, 30.6],
  '湖南': [112.9, 28.2],
  '山东': [117.0, 36.7],
  '河北': [114.5, 38.0],
  '河南': [113.7, 34.8],
  '陕西': [108.9, 34.3],
  '福建': [119.3, 26.1],
  '安徽': [117.3, 31.8],
  '江西': [115.9, 28.7],
  '辽宁': [123.4, 41.8],
  '吉林': [125.3, 43.9],
  '黑龙江': [126.6, 45.7],
  '云南': [102.7, 25.0],
  '贵州': [106.7, 26.6],
  '广西': [108.3, 22.8],
  '海南': [110.3, 20.0],
  '重庆': [106.5, 29.5],
  '天津': [117.2, 39.1],
  '山西': [112.6, 37.9],
  '内蒙古': [111.7, 40.8],
  '宁夏': [106.3, 38.5],
  '甘肃': [103.8, 36.1],
  '青海': [101.7, 36.6],
  '新疆': [87.6, 43.8],
  '西藏': [91.1, 29.7],
  '台湾': [121.5, 25.0],
  '香港': [114.1, 22.3],
  '澳门': [113.5, 22.2]
}

// 加载中国地图数据
const loadChinaMap = async () => {
  try {
    const response = await fetch('/data/china.json')
    const chinaJson = await response.json()
    echarts.registerMap('china', chinaJson)
    initChart()
  } catch (error) {
    console.error('加载地图数据失败:', error)
  }
}

// 初始化图表
const initChart = () => {
  if (!chartRef.value) return
  
  chartInstance = echarts.init(chartRef.value)
  
  const option = {
    backgroundColor: '#0f172a',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      borderColor: '#334155',
      borderWidth: 1,
      textStyle: {
        color: '#e2e8f0',
        fontSize: 14
      },
      formatter: function(params) {
        return `<div style="font-weight: 600;">${params.name}</div>`
      }
    },
    geo: {
      map: 'china',
      roam: true,
      zoom: 1.2,
      center: [105, 36],
      label: {
        show: true,
        color: '#94a3b8',
        fontSize: 12
      },
      itemStyle: {
        areaColor: '#1e293b',
        borderColor: '#334155',
        borderWidth: 1
      },
      emphasis: {
        label: {
          show: true,
          color: '#e2e8f0',
          fontSize: 14,
          fontWeight: 'bold'
        },
        itemStyle: {
          areaColor: '#60a5fa',
          borderColor: '#93c5fd',
          borderWidth: 2,
          shadowColor: 'rgba(96, 165, 250, 0.5)',
          shadowBlur: 10
        }
      }
    },
    series: [
      {
        type: 'map',
        geoIndex: 0,
        data: []
      },
      {
        name: '星光点',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 8,
        itemStyle: {
          color: '#FFD700',
          shadowColor: '#FFD700',
          shadowBlur: 10
        },
        data: []
      }
    ]
  }
  
  chartInstance.setOption(option)
  
  // 添加事件监听
  chartInstance.on('click', handleClick)
  chartInstance.on('dblclick', handleDblClick)
  
  // 响应式处理
  const handleResize = () => {
    if (chartInstance) {
      chartInstance.resize()
      // 确保地图始终居中
      const option = chartInstance.getOption()
      if (option && option.geo && option.geo[0]) {
        chartInstance.setOption({
          geo: [{
            ...option.geo[0],
            center: [105, 36] // 中国地图中心坐标
          }]
        })
      }
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  // 组件卸载时移除监听
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    chartInstance && chartInstance.dispose()
  })
}

// 处理单击事件
const handleClick = (params) => {
  if (params.componentType === 'geo') {
    const provinceName = params.name
    openDrawer(provinceName)
  }
}

// 处理双击事件
const handleDblClick = (params) => {
  if (params.componentType === 'geo') {
    const provinceName = params.name
    toggleProvinceStatus(provinceName)
  }
}

// 切换省份激活状态
const toggleProvinceStatus = (provinceName) => {
  if (activatedProvinces.value.has(provinceName)) {
    activatedProvinces.value.delete(provinceName)
  } else {
    activatedProvinces.value.add(provinceName)
  }
  updateMapDisplay()
}

// 打开侧边栏
const openDrawer = (provinceName) => {
  currentProvince.value = provinceName
  cities.value = provinceCities[provinceName] || []
  selectedCities.value = []
  showDrawer.value = true
}

// 关闭侧边栏
const closeDrawer = () => {
  showDrawer.value = false
  currentProvince.value = ''
  cities.value = []
  selectedCities.value = []
}

// 切换城市选择
const toggleCity = (city) => {
  const index = selectedCities.value.indexOf(city)
  if (index > -1) {
    selectedCities.value.splice(index, 1)
  } else {
    selectedCities.value.push(city)
  }
}

// 确认城市选择
const confirmSelection = () => {
  if (currentProvince.value && selectedCities.value.length > 0) {
    // 生成星光点
    const center = provinceCenters[currentProvince.value]
    if (center) {
      selectedCities.value.forEach(city => {
        // 在中心附近随机生成坐标
        const offsetX = (Math.random() - 0.5) * 2
        const offsetY = (Math.random() - 0.5) * 2
        starPoints.value.push({
          name: city,
          value: [center[0] + offsetX, center[1] + offsetY]
        })
      })
    }
    updateMapDisplay()
  }
  closeDrawer()
}

// 更新地图显示
const updateMapDisplay = () => {
  if (!chartInstance) return
  
  // 更新省份颜色
  const provinceData = Object.keys(provinceCenters).map(provinceName => {
    const isActivated = activatedProvinces.value.has(provinceName)
    return {
      name: provinceName,
      value: isActivated ? 1 : 0,
      itemStyle: {
        areaColor: isActivated 
          ? {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [{
                offset: 0, color: '#06b6d4' // 青蓝色
              }, {
                offset: 1, color: '#3b82f6' // 蓝色
              }]
            }
          : '#1e293b',
        borderColor: isActivated ? '#06b6d4' : '#334155',
        borderWidth: isActivated ? 2 : 1,
        shadowColor: isActivated ? 'rgba(6, 182, 212, 0.6)' : 'rgba(0, 0, 0, 0)',
        shadowBlur: isActivated ? 20 : 0
      },
      emphasis: {
        itemStyle: {
          areaColor: '#60a5fa',
          borderColor: '#93c5fd',
          borderWidth: 2,
          shadowColor: 'rgba(96, 165, 250, 0.5)',
          shadowBlur: 15
        }
      },
      select: {
        itemStyle: {
          areaColor: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{
              offset: 0, color: '#06b6d4'
            }, {
              offset: 1, color: '#3b82f6'
            }]
          },
          borderColor: '#06b6d4',
          borderWidth: 2,
          shadowColor: 'rgba(6, 182, 212, 0.6)',
          shadowBlur: 20
        }
      }
    }
  })
  
  chartInstance.setOption({
    series: [
      {
        type: 'map',
        geoIndex: 0,
        data: provinceData,
        emphasis: {
          label: {
            show: true,
            color: '#e2e8f0',
            fontSize: 14,
            fontWeight: 'bold'
          },
          itemStyle: {
            areaColor: '#60a5fa',
            borderColor: '#93c5fd',
            borderWidth: 2,
            shadowColor: 'rgba(96, 165, 250, 0.5)',
            shadowBlur: 15
          },
          emphasisFocus: 'self',
          animationDuration: 300,
          animationEasing: 'cubicOut'
        },
        select: {
          label: {
            show: true,
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 'bold'
          },
          itemStyle: {
            areaColor: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [{
                offset: 0, color: '#06b6d4'
              }, {
                offset: 1, color: '#3b82f6'
              }]
            },
            borderColor: '#06b6d4',
            borderWidth: 2,
            shadowColor: 'rgba(6, 182, 212, 0.6)',
            shadowBlur: 20
          },
          animationDuration: 300,
          animationEasing: 'cubicOut'
        },
        animationDuration: 300,
        animationEasing: 'cubicOut'
      },
      {
        name: '星光点',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 8,
        itemStyle: {
          color: '#FFD700',
          shadowColor: '#FFD700',
          shadowBlur: 10
        },
        data: starPoints.value,
        animationDuration: 500,
        animationEasing: 'elasticOut'
      }
    ]
  })
  
  // 保存数据到localStorage
  saveToLocalStorage()
}

onMounted(() => {
  // 先加载localStorage数据
  loadFromLocalStorage()
  // 然后初始化地图
  loadChinaMap()
})
</script>

<style scoped>
.travel-map {
  width: 100%;
  height: 100%;
  background-color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.chart-container {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 800px;
}

/* 侧边栏样式 */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 23, 42, 0);
  backdrop-filter: blur(0px);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.drawer-overlay.active {
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  opacity: 1;
  pointer-events: auto;
}

.drawer {
  width: 400px;
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(12px);
  border-left: 1px solid rgba(51, 65, 85, 0.5);
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-overlay.active .drawer {
  transform: translateX(0);
}

.drawer-header {
  padding: 20px;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-header h2 {
  color: #e2e8f0;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
}

.drawer-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.city-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.city-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.city-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.city-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-right: 12px;
  accent-color: #06b6d4;
}

.city-item label {
  color: #e2e8f0;
  font-size: 14px;
  cursor: pointer;
  flex: 1;
}

.drawer-footer {
  padding: 20px;
  border-top: 1px solid rgba(51, 65, 85, 0.5);
  display: flex;
  gap: 12px;
}

.btn {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary {
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  color: white;
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  border: 1px solid rgba(51, 65, 85, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .drawer {
    width: 100%;
  }
  
  .chart-container {
    max-height: 600px;
  }
}
</style>