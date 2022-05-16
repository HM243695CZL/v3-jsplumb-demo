<template>
  <div class="set-connect-arrow">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted, reactive} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'set-connect-arrow',
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      common: {
        endpoint: 'Dot',
        connector: ['Bezier'],
        anchor: [
          'Top', 'TopCenter', 'TopLeft', 'TopRight',
          'Right', 'RightMiddle',
          'Bottom', 'BottomCenter', 'BottomLeft', 'BottomRight',
          'Left', 'LeftMiddle',
        ]
      }
    });
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemRight =  proxy.$refs.itemRight
      jsPlumb.connect({
        source: itemLeft,
        target: itemRight,
        paintStyle: {
          stroke: '#126ac6',
          strokeWidth: 2
        },
        endpointStyle: {
          fill: '#126ac6',
          outlineStroke: '#f00',
          outlineWidth: 2
        },
        overlays: [
            ['Arrow', {
              width: 12,
              length: 12,
              location: .5
            }],
            ['Label', {
              width: 12,
              length: 12,
              location: .3,
              label: 'hl243695czyn'
            }],
            // ['PlainArrow',{}],
            // ['Diamond', {}]
        ]
      }, state.common);
      jsPlumb.draggable(itemLeft);
      jsPlumb.draggable(itemRight);
    });
  }
})
</script>

<style scoped lang="less">
  .set-connect-arrow{
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
        left: 800px;
      }
    }
  }
</style>
