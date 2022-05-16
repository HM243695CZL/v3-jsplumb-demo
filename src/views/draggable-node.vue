<template>
  <div class="draggable-node">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'draggable-node',
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemRight =  proxy.$refs.itemRight
      jsPlumb.connect({
        source: itemLeft,
        target: itemRight,
        endpoint: 'Rectangle'
      });
      jsPlumb.draggable(itemLeft);
      jsPlumb.draggable(itemRight);
    });
  }
})
</script>

<style scoped lang="less">
  .draggable-node{
    padding: 20px;
    width: 80%;
    height: 200px;
    .item{
      position: absolute;
      width: 80px;
      height: 80px;
      border: 1px solid #000;
      &:nth-child(1) {
        left: 300px;
      }
      &:nth-child(2) {
        left: 400px;
      }
    }
  }
</style>
