import data2022 from './mock/new-line/2022.js'
import data2021 from './mock/new-line/2021.js'
import data2020 from './mock/new-line/2020.js'
import data2019 from './mock/new-line/2019.js'
import data2018 from './mock/new-line/2018.js'
import data2017 from './mock/new-line/2017.js'
import data2016 from './mock/new-line/2016.js'
import data2015 from './mock/new-line/2015.js'
import data2014 from './mock/new-line/2014.js'
import data2013 from './mock/new-line/2013.js'

const chart = new F2.Chart({
  id: 'container',
  pixelRatio: window.devicePixelRatio,
})

const genRenderData = () => {
  const ans = [
    ...data2013,
    ...data2014,
    ...data2015,
    ...data2016,
    ...data2017,
    ...data2018,
    ...data2019,
    ...data2020,
    ...data2021,
    ...data2022,
  ]
  return ans
}

// 构造data
chart.source(genRenderData())

chart.legend({
  align: 'center',
})

chart.line().position('date*rankNum').color('cityName', [
  '#F5C104', // 成都
  '#0B26F7', // 杭州
  '#04B7F8', // 南京
  '#B704F8', // 武汉
  '#FF7396', // 天津
  '#3FA2A2', // 西安
  '#5FD068', // 重庆
  '#603FA2', // 青岛
  '#371B58', // 沈阳
  '#FB0C0C', // 长沙
  '#736B8B', // 大连
  '#FF3C33', // 厦门
  '#33F3FF', // 无锡
  '#FF5B33', // 福州
  '#3361FF', // 济南
  '#CF5B21', // 苏州
  '#D524A8', // 宁波
  '#E811CF', // 郑州
  '#872F3D', // 东莞
  '#9EE754', // 昆明
  '#E428AF', // 合肥
  '#94E815', // 佛山
])
chart.render()
