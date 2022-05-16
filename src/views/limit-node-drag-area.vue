<template>
  <div class="limit-node-drag-area">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted, reactive} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'limit-node-drag-area',
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
        containment: 'parent'
      });
      jsPlumb.draggable(itemRight, {
        containment: 'parent'
      });
    });
  }
})
</script>

<style scoped lang="less">
  .limit-node-drag-area{
    border: 1px solid #000;
    width: 80%;
    height: 200px;
    position: relative;
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
  }
</style>
