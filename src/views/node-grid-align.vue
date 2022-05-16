<template>
  <div class="node-grid-align">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
    <div class="w-line" v-for="item in 60" :key="item" :style="{top: item * 10 + 'px'}"></div>
    <div class="h-line" v-for="item in 133" :key="item" :style="{left: item * 10 + 'px'}"></div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'node-grid-align',
  setup() {
    const {proxy} = getCurrentInstance();
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemRight =  proxy.$refs.itemRight
      jsPlumb.connect({
        source: itemLeft,
        target: itemRight,
        endpoint: 'Rectangle'
      });
      jsPlumb.draggable(itemLeft, {
        grid: [10, 10]
      });
      jsPlumb.draggable(itemRight, {
        grid: [10, 10]
      });
    });
  }
})
</script>

<style scoped lang="less">
  .node-grid-align{
    width: 80%;
    height: 600px;
    position: relative;
    border: 1px solid #ccc;
    .item {
      position: absolute;
      width: 80px;
      height: 80px;
      border: 1px solid #000;

      &:nth-child(1) {
        left: 300px;
      }

      &:nth-child(2) {
        left: 500px;
      }
    }
    .w-line{
      position: absolute;
      left: 0;
      top: 10px;
      width: 100%;
      z-index: -1;
      border-top: 1px dashed #efefef;
    }
    .h-line{
      position: absolute;
      left: 10px;
      top: 0;
      z-index: -1;
      height: 100%;
      border-left: 1px dashed #efefef;
    }
  }
</style>
