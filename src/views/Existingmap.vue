<template>
    <!--现有确诊-->
    <div class="myecharts" ref="chart_existing_map" :style="{margin:'0 auto', width:'800px',height: '600px'}">
    </div>
</template>

<script>
    import 'echarts/map/js/china'
    import {jsonp} from 'vue-jsonp'
    import {getdata} from "../api/data";

    /*累计确诊*/
    const option_existing = {
        title: {
            text: '疫情地图',
            subtext: '现有确诊数据地图'
        },
        series: [{
            name: '现有确诊',
            type: 'map',
            map: 'china',
            label: {
                show: true,
                color: '#0e0e0e',
                fontSize: 11
            },
            roam: false,
            zoom: 1,
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
                    areaColor: '#6fc1dc'
                }
            }
        }],
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            type: 'piecewise',
            show: true,
            pieces:[
                {min: 10000},
                {min: 1000 ,max: 9999},
                {min: 100 ,max: 999},
                {min: 10 ,max: 99},
                {min: 1 ,max: 9}
            ],
            inRange: {
                symbol: 'rect',
                color: ['#ffc0b1','#9c0505']
            }
        }
    }

    export default {
        name: "Existingmap",
        mounted() {
            this.getData();
            this.myChart_existing_map = this.$echarts.init(this.$refs.chart_existing_map)
            //绘制图表
            this.myChart_existing_map.setOption(option_existing)
        },
        methods: {
            getData(){
                getdata().then( res => {
                    console.log(res.data)
                    let info = res.data.data.map(item => {
                        return{
                            name: item.provinceName,
                            value: item.nowConfirm
                        }
                    })
                    console.log(info)
                    option_existing.series[0].data = info
                    this.myChart_existing_map.setOption(option_existing)
                })
            }
        }
    }
</script>

<style scoped>

</style>