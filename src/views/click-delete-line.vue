<template>
  <div class="click-delete-line">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted, reactive} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'click-delete-line',
  setup() {
    const {proxy} = getCurrentInstance();
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemRight =  proxy.$refs.itemRight;
      jsPlumb.connect({
        source: itemLeft,
        target: itemRight,
        endpoint: 'Rectangle',
        connector: ['Bezier'],
        anchor: [
          'Top', 'TopCenter', 'TopLeft', 'TopRight',
          'Right', 'RightMiddle',
          'Bottom', 'BottomCenter', 'BottomLeft', 'BottomRight',
          'Left', 'LeftMiddle',
        ],
        paintStyle: {
          outlineStroke: '#126ac6',
          strokeWidth: 5
        },
        connectorStyle: {
          outlineStroke: '#0f0',
          strokeWidth: 5
        },
        connectorHoverStyle: {
          outlineStroke: '#17a373',
          strokeWidth: 2
        }
      });
      jsPlumb.draggable(itemLeft);
      jsPlumb.draggable(itemRight);
      jsPlumb.bind('click', function (conn, e) {
        jsPlumb.deleteConnection(conn);
      })
    });
  }
})
</script>

<style scoped lang="less">
  .click-delete-line{
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
  }
</style>
