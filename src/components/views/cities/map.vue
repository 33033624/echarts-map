<template>
  <div :id="id" class="o-echarts"></div>
</template>

<script>
import echarts from "echarts";
import { getLiaoningJson } from "@/api/api";
export default {
  props: {
    kstjList: {
      type: Array,
      default: () => null
    }
  },
  data() {
    return {
      id: "echarts_" + new Date().getTime() + Math.floor(Math.random() * 1000),
      echartObj: null,
      liaoningJson: null
    };
  },
  mounted() {
    getLiaoningJson().then(res => {
      this.liaoningJson = res["data"];
      this.echartObj = echarts.init(document.getElementById(this.id));
      echarts.registerMap("辽宁", this.liaoningJson);
      this.setOption();
      this.echartObj.on("click", ({ name }) => {
        res["data"]["features"].map(i => {
          if (i["properties"]["name"] == name) {
            this.$router.push({
              name: "counties",
              query: {
                dsid: i["id"]
              }
            });
          }
        });
      });
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
            { start: 1, end: 1, label: "沈阳市", color: "#fff5be" },
            { start: 2, end: 2, label: "大连市", color: "#dfffca" },
            { start: 3, end: 3, label: "鞍山市", color: "#fff77c" },
            { start: 4, end: 4, label: "抚顺市", color: "#d9d6ff" },
            { start: 5, end: 5, label: "本溪市", color: "#d0eebc" },
            { start: 6, end: 6, label: "丹东市", color: "#bde7ff" },
            { start: 7, end: 7, label: "锦州市", color: "#d9d6ff" },
            { start: 8, end: 8, label: "营口市", color: "#fff5b4" },
            { start: 9, end: 9, label: "阜新市", color: "#ffd9c5" },
            { start: 10, end: 10, label: "辽阳市", color: "#d9d6ff" },
            { start: 11, end: 11, label: "铁岭市", color: "#dfffca" },
            { start: 12, end: 12, label: "朝阳市", color: "#ffd6e4" },
            { start: 13, end: 13, label: "盘锦市", color: "#dfffca" },
            { start: 14, end: 14, label: "葫芦岛市", color: "#ffd9c5" }
          ]
        },
        series: [
          {
            type: "map", // 系列类型
            map: "辽宁",
            label: {
              normal: {
                show: true //省份名称
              },
              emphasis: {
                show: false
              },
              textStyle: {
                color: "#333",
                textAlign: "center"
              }
            },
            data: [
              { name: "沈阳市", value: 1 },
              { name: "大连市", value: 2 },
              { name: "鞍山市", value: 3 },
              { name: "抚顺市", value: 4 },
              { name: "本溪市", value: 5 },
              { name: "丹东市", value: 6 },
              { name: "锦州市", value: 7 },
              { name: "营口市", value: 8 },
              { name: "阜新市", value: 9 },
              { name: "辽阳市", value: 10 },
              { name: "铁岭市", value: 11 },
              { name: "朝阳市", value: 12 },
              { name: "盘锦市", value: 13 },
              { name: "葫芦岛市", value: 14 }
            ]
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
