<template>
  <div id="app" class="mt-4">
    <!--container-->
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
  export default{
    name: 'App',
  }
</script>

<style >
  #app{
    line-height: 1.1;
    margin: 0 auto;
  }
</style>
