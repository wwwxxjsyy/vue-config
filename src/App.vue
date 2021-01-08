<template>
  <transition mode="out-in" name="fade-transform">
    <keep-alive>
      <router-view class="app-main-height" />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: "App",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
