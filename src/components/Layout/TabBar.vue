<template>
    <div class="tab-bar">
        <van-tabbar class="tabbarmenu" v-model="active" route>
            <van-tabbar-item icon="bulb-o" replace to="/epidemicData">疫情数据</van-tabbar-item>
            <van-tabbar-item icon="chat-o" replace to="/dynamic">实时动态</van-tabbar-item>
            <van-tabbar-item icon="guide-o" replace to="/guide">防疫指南</van-tabbar-item>
            <van-tabbar-item icon="warn-o" replace to="/rumor">官方辟谣</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

    export default {
        name: "TabBar",
        data(){
            return{
                active: 0,
            }
        }
    }
</script>

<style>
    .tab-bar{
        position: fixed;
        z-index: 10;
    }

</style>