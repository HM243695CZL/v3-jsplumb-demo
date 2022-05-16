<template>
  <div class="connection-before-if">
     <div class="box">
       a:<input type="number" v-model="num1"> <br> <br>
       b:<input type="number" v-model="num2">
     </div>
    <div class="item" ref="itemLeft">left-{{num1 >= num2 ? '可以连接' : '不能连接'}}</div>
    <div class="item" ref="itemRight">right-{{num1 >= num2 ? '可以连接' : '不能连接'}}</div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted, reactive, toRefs, watch} from 'vue';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'connection-before-if',
  setup() {
    const {proxy} = getCurrentInstance();
    const state = reactive({
      num1: 1,
      num2: 2,
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
        ]
      }
    });
    watch(() => state.num1, () => {
      if (jsPlumb.getConnections().length) {
        jsPlumb.deleteConnection(jsPlumb.getConnections()[0])
      }
    });
    watch(() => state.num2, () => {
      if (jsPlumb.getConnections().length) {
        jsPlumb.deleteConnection(jsPlumb.getConnections()[0])
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
      jsPlumb.bind('beforeDrop', function (info){
        if (state.num1 >= state.num2) {
          console.log('可以连接');
          return true;
        } else {
          console.log('连接取消');
          return false;
        }
      })
    });
    return {
      ...toRefs(state),
    }
  }
})
</script>

<style scoped lang="less">
  .connection-before-if{
    padding: 20px;
    width: 80%;
    height: 200px;
    .box{
      position: absolute;
      top: 20px;
      right: 20px;
    }
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
