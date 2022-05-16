<template>
  <div class="dynamic-connection-end-point">
    <div class="item" ref="itemLeft">3s后自动连接</div>
    <div class="item" ref="itemRight">right</div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'dynamic-connection-end-point',
  setup() {
    const {proxy} = getCurrentInstance();
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemRight =  proxy.$refs.itemRight;
      jsPlumb.draggable(itemLeft);
      jsPlumb.draggable(itemRight);
      jsPlumb.addEndpoint(itemLeft, {
        anchors: ['Right'],
        uuid: 'fromId'
      });
      jsPlumb.addEndpoint(itemRight, {
        anchors: ['Top'],
        uuid: 'toId'
      });
      setTimeout(() => {
        jsPlumb.connect({
          uuids: ['fromId', 'toId']
        })
      }, 3000)
    });
  }
})
</script>

<style scoped lang="less">
  .dynamic-connection-end-point{
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
