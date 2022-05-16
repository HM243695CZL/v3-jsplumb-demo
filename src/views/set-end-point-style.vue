<template>
  <div class="set-end-point-style">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted, reactive} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'set-end-point-style',
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
        paintStyle: {
          fill: '#b21010',
          outlineStroke: '#126ac6',
          strokeWidth: 2
        },
        hoverPaintStyle: {
          outlineStroke: '#f40'
        },
        connectorStyle: {
          outlineStroke: '#0f0',
          strokeWidth: 2
        },
        connectorHoverStyle: {
          outlineStroke: '#17a373',
          strokeWidth: 2
        }
      }
    });
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemRight =  proxy.$refs.itemRight;
      jsPlumb.draggable(itemLeft);
      jsPlumb.draggable(itemRight);
      jsPlumb.addEndpoint(itemLeft, {
        anchors: ['Right']
      }, state.common);
      jsPlumb.addEndpoint(itemRight, {
        anchors: ['Top']
      }, state.common);
    });
  }
})
</script>

<style scoped lang="less">
  .set-end-point-style{
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
