<!-- 全国地图 -->
<template>
  <div class="echartsmap_class" id="container"></div>
  <button @click="handlerouter">handlerouter</button>
  <!-- <p>当前地图级别：{{ jsondata.zoom }}</p>
  <p>当前地图中心位置坐标：{{ jsondata.center }}</p> -->
</template>

<script>
export default {
  name: "gdmap",

  components: {},

  props: {},

  data() {
    return {
      jsondata: {
        zoom: "11",
        center: "121.498586, 31.239637",
      },
    };
  },

  watch: {},

  computed: {},

  methods: {
    handlerouter() {
      this.$router.push("/404");
    },
    getMap() {
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        resizeEnable: true, //是否监控地图容器尺寸变化
        center: [121.498586, 31.239637], //中心点坐标
        viewMode: "3D", //使用3D视图
      });

      //实时路况图层
      var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10,
      });
      map.add(trafficLayer); //添加图层到地图
      //使用CSS默认样式定义地图上的鼠标样式
      map.setDefaultCursor("pointer");

      let that = this;

      //显示地图层级与中心点信息
      function logMapinfo() {
        var zoom = map.getZoom(); //获取当前地图级别
        var center = map.getCenter(); //获取当前地图中心位置

        that.jsondata.zoom = zoom;
        that.jsondata.center = center.toString();
      }

      //绑定地图移动与缩放事件
      map.on("moveend", logMapinfo);
      map.on("zoomend", logMapinfo);
    },
  },

  created() {},

  mounted() {
    this.getMap();
  },
};
</script>

<style lang="scss" scoped>
.echartsmap_class {
  width: 400px;
  height: 400px;
  width: 100%;
  height: 100%;

  .amap-copyright:deep() {
    display: none !important;
  }

  .amap-logo:deep() {
    display: none !important;
  }
}
</style>
