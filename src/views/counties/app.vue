<template lang="html">
  <section class="cities-box">
    <div class="echarts-box">
      <Echart />
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Echart: () => import("@/components/views/counties/map.vue")
  }
};
</script>

<style lang="scss" scoped>
.cities-box {
  height: 100%;
  width: 100vw;
  background: #fff;
}
.echarts-box {
  display: inline-block;
  width: 100vw;
  height: 100vh;
  margin-left: 2.8vw;
  margin-top: 1.3vw;
}
</style>
