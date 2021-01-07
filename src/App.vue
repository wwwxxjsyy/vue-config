<template>
  <div>
    <Echarts-Map></Echarts-Map>
  </div>
</template>

<script>
import Echartsmap from "@/components/echartsmap.vue";
export default {
  name: "App",
  components: { "Echarts-Map": Echartsmap },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
