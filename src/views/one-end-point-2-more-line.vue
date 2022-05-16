<template>
  <div class="one-end-point-2-more-line">
    <div class="item" ref="itemLeft">left</div>
    <div class="item" ref="itemCenter">center</div>
    <div class="item" ref="itemRight">right</div>
    <div class="item" ref="itemRight2">right2</div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted, reactive} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'one-end-point-2-more-line',
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      common: {
        isSource: true,
        isTarget: true,
        endpoint: 'Dot',
        connector: ['Bezier'],
        anchor: [
          'Top', 'TopCenter', 'TopLeft', 'TopRight',
          'Right', 'RightMiddle',
          'Bottom', 'BottomCenter', 'BottomLeft', 'BottomRight',
          'Left', 'LeftMiddle',
        ],
        maxConnections: 3
      }
    });
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemCenter =  proxy.$refs.itemCenter;
      const itemRight =  proxy.$refs.itemRight;
      const itemRight2 =  proxy.$refs.itemRight2;
      jsPlumb.draggable(itemLeft);
      jsPlumb.draggable(itemCenter);
      jsPlumb.draggable(itemRight);
      jsPlumb.draggable(itemRight2);
      jsPlumb.addEndpoint(itemLeft, {
        anchors: ['Right']
      }, state.common);
      jsPlumb.addEndpoint(itemCenter, {
        anchors: ['Right']
      }, state.common);
      jsPlumb.addEndpoint(itemRight, {
        anchors: ['Top']
      }, state.common);
      jsPlumb.addEndpoint(itemRight2, {
        anchors: ['Bottom']
      }, state.common);
    });
  }
})
</script>

<style scoped lang="less">
  .one-end-point-2-more-line{
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
        top: 150px;
        left: 800px;
      }

      &:nth-child(3) {
        left: 1200px;
      }

      &:nth-child(4) {
        top: 200px;
        left: 1150px;
      }
    }
  }
</style>
