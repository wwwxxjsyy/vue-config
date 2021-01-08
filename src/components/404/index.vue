<!--  -->
<template>
  <div class="cont_class">
    <div class="bullshit">
      <div class="bullshit-oops">{{ oops }}</div>
      <div class="bullshit-headline">{{ headline }}</div>
      <div class="bullshit-info">{{ info }}</div>
      <div class="bullshit-return-home">
        {{ jumpTime }} <button @click="handlebtn">{{ btn }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",

  components: {},

  props: {},

  data() {
    return {
      jumpTime: 5,
      oops: "抱歉!",
      headline: "当前页面不存在...",
      info: "请检查您输入的网址是否正确，或点击下面的按钮返回首页。",
      btn: "返回首页",
      timer: 0,
    };
  },

  watch: {},

  computed: {},

  methods: {
    handlebtn() {
      this.$router.push("/");
    },
    timeChange() {
      let thant = this
      this.timer = setInterval(() => {
        if (this.jumpTime) {
          this.jumpTime--;
        } else {
          thant.$router.push({ path: "/" });
          clearInterval(this.timer);
        }
      }, 1000);
    },
  },

  created() {},

  mounted() {
    this.timeChange();
  },
};
</script>
<style lang="scss" scoped>
.cont_class {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  .bullshit {
    position: relative;
    float: left;
    width: 300px;
    padding: 30px 0;
    overflow: hidden;

    &-oops {
      margin-bottom: 20px;
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: blue;
      opacity: 0;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }

    &-headline {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      line-height: 24px;
      color: #222;
      opacity: 0;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }

    &-info {
      margin-bottom: 30px;
      font-size: 13px;
      line-height: 21px;
      color: gray;
      opacity: 0;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }

    &-return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      font-size: 14px;
      line-height: 36px;
      color: rgb(243, 69, 26);
      text-align: center;
      cursor: pointer;
      border-radius: 100px;
      opacity: 0;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }

    @keyframes slideUp {
      0% {
        opacity: 0;
        transform: translateY(60px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>
