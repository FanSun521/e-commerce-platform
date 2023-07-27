<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/Index.vue";
import Footer from "@/components/Footer/Index.vue";
export default {
  name: "App",
  props: {},
  components: {
    Header,Footer
  },
};
</script>

<style scoped>
</style>
