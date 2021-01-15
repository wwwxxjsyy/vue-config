<!--  -->
<template>
  <div class="fscss_class">123</div>
</template>

<script>
export default {
  name: "fscss",

  components: {},

  props: {},

  data() {
    return {};
  },

  watch: {},

  computed: {},

  methods: {
    handleFscssFile() {
      // fs.writeFile(`/public/css/index.css`, str, "binary", function(err) {
      //   if (!err) {
      //     console.log(`写入完毕`);
      //   }
      // });
    },
  },

  created() {
    this.handleFscssFile();
  },

  mounted() {},
};
</script>
<style lang="scss" scoped>
.fscss_class {
}
</style>
