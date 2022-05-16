<template>
  <div class="set-connect-default-value">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted, reactive} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'set-connect-default-value',
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      common: {
        endpoint: 'Rectangle',
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
      }, state.common);
      jsPlumb.draggable(itemLeft);
      jsPlumb.draggable(itemRight);
    });
  }
})
</script>

<style scoped lang="less">
  .set-connect-default-value{
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
