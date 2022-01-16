<template>
  <div class="myecharts" ref="chart" :style="{margin:'0 auto', width:'800px',height: '600px'}">

  </div>
</template>

<script>
  import 'echarts/map/js/china'
  import {jsonp} from 'vue-jsonp'

  const option = {
    title: {
      text: '疫情地图',
      subtext: '疫情地图'
    },
    series: [{
      name: '确诊人数',
      type: 'map',
      map: 'china',
      label: {
        show: true,
        color: '#0e0e0e',
        fontSize: 12
      },
      roam: true,
      zoom: 1.2,
      itemStyle: {
        areaColor: '#eee',
        borderColor: 'green'
      },
      data: [],
      emphasis: {
        label: {
          color: '#fff',
          fontSize: 14
        },
        itemStyle: {
          areaColor: '#83b5e7'
        }
      }
    }],
    tooltip: {
      trigger: 'item'
    }
  }
export default {
  name: 'Echarts',
  components: {},
  mounted() {
    this.getData();
    this.myChart = this.$echarts.init(this.$refs.chart)
    //绘制图表
    this.myChart.setOption(option)
  },
  methods: {
    getData(){
      jsonp(`https://interface.sina.cn/news/wap/fymap2020_data.d.json`).then( (res) => {
        console.log(res.data.list)
        let info = res.data.list.map( item => {
          return{
            name: item.name,
            value: item.value
          }
        })
        console.log(info)
        option.series[0].data = info
        this.myChart.setOption(option)
      })
    }
  }
}
</script>
