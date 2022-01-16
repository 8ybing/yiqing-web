<template>
    <div>
        <div class="banner">
            <b-image
            :src="require('../assets/bj.jpg')"
            alt="图片加载失败"
            lazy>
            </b-image>
        </div>
        <div class="data-card box">
                <div class="box" >
                    <div class="title is-4">
                        全国疫情
                    </div>
                    <div class="media columns is-gapless mb-0" style="text-align: center">
                        <div class="column  is-4 ">
                            <div class="box" style="box-shadow: none">
                                <div class="data-change-number">
                                    较上日<span>1</span>
                                </div>
                                <div class="data-number">
                                    <span>2</span>
                                </div>
                                <div class="data-text">
                                    本土现有确诊
                                </div>
                            </div>
                        </div>
                        <div class="column is-4-mobile">
                            <div class="box" style="box-shadow: none">
                                <div>
                                    1
                                </div>
                                <div>
                                    2
                                </div>
                                <div>
                                    现有确诊
                                </div>
                            </div>
                        </div>
                        <div class="column is-4-mobile">
                            <div class="box" style="box-shadow: none">
                                <div>
                                    1
                                </div>
                                <div>
                                    2
                                </div>
                                <div>
                                    累计确诊
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="media columns is-gapless" style="text-align: center">
                        <div class="column is-4-mobile">
                            <div class="box" style="box-shadow: none">
                                <div>
                                    1
                                </div>
                                <div>
                                    2
                                </div>
                                <div>
                                    无症状
                                </div>
                            </div>
                        </div>
                        <div class="column is-4-mobile">
                            <div class="box" style="box-shadow: none">
                                <div>
                                    1
                                </div>
                                <div>
                                    2
                                </div>
                                <div>
                                    境外输入
                                </div>
                            </div>
                        </div>
                        <div class="column is-4-mobile">
                            <div class="box" style="box-shadow: none">
                                <div>
                                    1
                                </div>
                                <div>
                                    2
                                </div>
                                <div>
                                    累计死亡
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "EpidemicData"
    }
</script>

<style scoped>

    .data-card{
        position: relative;
        z-index: 5;
        margin-top: -10px;
    }
    .data-number{
        font-size: 1.5rem;
        font-weight: bolder;
    }
    .data-text{
        font-size: 1rem;
        font-weight: bolder;
    }
    .data-change-number{
        font-size: 1rem;
        font-weight: bolder;
    }
</style>