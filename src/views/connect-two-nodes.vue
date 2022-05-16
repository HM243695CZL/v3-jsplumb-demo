<template>
  <div class="connect-tow-nodes flex">
    <div class="item" ref="itemLeft"></div>
    <div class="item" ref="itemRight"></div>
  </div>
</template>

<script>
import { jsPlumb } from 'jsplumb';
import {defineComponent, getCurrentInstance, onMounted} from 'vue';

export default defineComponent({
  name: 'connect-two-nodes',
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      const itemLeft =  proxy.$refs.itemLeft;
      const itemRight =  proxy.$refs.itemRight;
      jsPlumb.connect({
        source: itemLeft,
        target: itemRight,
        endpoint: 'Dot'
      });
    });
  }
})
</script>

<style scoped lang="less">
  .connect-tow-nodes{
    padding: 20px;
    width: 80%;
    height: 200px;
    .item{
      width: 80px;
      height: 80px;
      border: 1px solid #000;
      &:last-child{
        margin-left: 200px;
      }
    }
  }
</style>
