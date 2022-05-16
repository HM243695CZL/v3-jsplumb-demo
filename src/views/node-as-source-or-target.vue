<template>
  <div class="node-as-source-or-target">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted, reactive} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'node-as-source-or-target',
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemRight =  proxy.$refs.itemRight;
      jsPlumb.makeSource(itemLeft, {
        endpoint:"Dot",
        anchor: "Continuous"
      })

      jsPlumb.makeTarget(itemRight, {
        endpoint:"Dot",
        anchor: "Continuous"
      })

      jsPlumb.draggable(itemLeft)
      jsPlumb.draggable(itemRight)
    });
  }
})
</script>

<style scoped lang="less">
  .node-as-source-or-target{
    padding: 20px;
    width: 80%;
    height: 200px;
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
