<template>
  <div id="app">
    <!--container-->
    <div class="container">
      <router-view/>
    </div>
    <div class="mt-6">
      <TabBar></TabBar>
    </div>

  </div>
</template>

<script>
  import TabBar from "./components/Layout/TabBar";
  export default{
    name: 'App',
    components: {TabBar}
  }
</script>

<style >
  #app{
    line-height: 1.1;
    margin: 0 auto;
  }
</style>
