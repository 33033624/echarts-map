<template>
  <div :id="id" class="o-echarts"></div>
</template>

<script>
import echarts from "echarts";
import { getLiaoningDsJson } from "@/api/api";

export default {
  data() {
    return {
      id: "echarts_" + new Date().getTime() + Math.floor(Math.random() * 1000),
      echartObj: null,
      seriesData: []
    };
  },
  mounted() {
    getLiaoningDsJson(this.$route.query["dsid"] || "2101").then(({ data }) => {
      this.echartObj = echarts.init(document.getElementById(this.id));
      echarts.registerMap("city", data);
      data["features"].map((i, k) => {
        this.seriesData.push({
          name: i["properties"]["name"],
          value: k + 1
        });
      });
      this.setOption();
    });
  },
  methods: {
    setOption() {
      this.echartObj.setOption({
        color: ["#E0022B", "#E09107", "#A3E00B"],
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
          backgroundColor: "rgba(51,204,204,1)",

          formatter: () => {
            let str = "test";
            return str;
          }
        },
        dataRange: {
          show: false,
          splitList: [
            { start: 1, end: 1, color: "#fff5be" },
            { start: 2, end: 2, color: "#dfffca" },
            { start: 3, end: 3, color: "#fff77c" },
            { start: 4, end: 4, color: "#d9d6ff" },
            { start: 5, end: 5, color: "#d0eebc" },
            { start: 6, end: 6, color: "#bde7ff" },
            { start: 7, end: 7, color: "#d9d6ff" },
            { start: 8, end: 8, color: "#fff5b4" },
            { start: 9, end: 9, color: "#ffd9c5" },
            { start: 10, end: 10, color: "#d9d6ff" },
            { start: 11, end: 11, color: "#dfffca" },
            { start: 12, end: 12, color: "#ffd6e4" },
            { start: 13, end: 13, color: "#dfffca" },
            { start: 14, end: 14, color: "#ffd9c5" },
            { start: 15, end: 15, color: "#fff5be" },
            { start: 16, end: 16, color: "#dfffca" },
            { start: 17, end: 17, color: "#fff77c" },
            { start: 18, end: 18, color: "#d9d6ff" },
            { start: 19, end: 19, color: "#d0eebc" },
            { start: 20, end: 20, color: "#bde7ff" }
          ]
        },
        series: [
          {
            type: "map", // 系列类型
            map: "city",
            roam: true,
            zoom: 1.5,
            scaleLimit: {
              min: 1,
              max: 10
            },
            label: {
              fontSize: 4,
              color: "red",
              normal: {
                show: true //省份名称
              },
              emphasis: {
                show: false
              }
              // textStyle: {
              //   color: "#333",
              //   textAlign: "center"
              // }
            },
            data: this.seriesData
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.o-echarts {
  min-width: 30px;
  min-height: 30px;
  width: 100%;
  height: 100%;
}
</style>
