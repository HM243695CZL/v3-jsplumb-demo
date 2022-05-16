<template>
  <div class="dashboard-container h100">
    <ul class="list">
      <li v-for="(item, index) in compList" :key="item.path"
          @click="turnInfo(item)"
          :class="currentPath === item.path ? 'active' : ''"
          :title="item.title"
      >
        {{index + 1}}、{{item.title}}
      </li>
    </ul>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import {defineComponent, reactive, toRefs, watch} from 'vue';
import { useRouter } from 'vue-router';
import {jsPlumb} from 'jsplumb';

export default defineComponent({
  name: 'dashboard',
  setup() {
    const router = useRouter();
    const state = reactive({
      compList: [
        { title: '连接两个节点', path: '/connect-two-nodes'},
        { title: '可拖动节点', path: '/draggable-node'},
        { title: '连接的其他参数', path: '/connect-other-args'},
        { title: '设置连接的默认值', path: '/set-connect-default-value'},
        { title: '给连接加上样式', path: '/set-connect-style'},
        { title: '给连接加上箭头', path: '/set-connect-arrow'},
        { title: '增加一个端点', path: '/add-end-point'},
        { title: '拖动创建连接', path: '/drag-create-connect'},
        { title: '给端点增加样式', path: '/set-end-point-style'},
        { title: '节点改变尺寸', path: '/node-change-size'},
        { title: '限制节点拖动区域', path: '/limit-node-drag-area'},
        { title: '节点网格对齐', path: '/node-grid-align'},
        { title: '点击删除连线', path: '/click-delete-line'},
        { title: '删除节点和连线', path: '/delete-node-and-line'},
        { title: '动态连接端点', path: '/dynamic-connection-end-point'},
        { title: '连接之前的判断', path: '/connection-before-if'},
        { title: '一个端点拖出多条连线', path: '/one-end-point-2-more-line'},
        { title: '整个节点作为source或target', path: '/node-as-source-or-target'},
      ],
      currentPath: ''
    });
    const resetDraw = () => {
      jsPlumb.deleteEveryConnection();
      jsPlumb.deleteEveryEndpoint();
    }
    const turnInfo = data => {
      router.push({
        path: data.path
      })
    };
    // 监听路由的变化，清空画布
    watch(() => router.currentRoute.value.path, (newVal) => {
      state.currentPath = newVal;
      resetDraw();
    });
    return {
      ...toRefs(state),
      turnInfo
    }
  }
})
</script>

<style scoped lang="less">
  .dashboard-container{
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ul.list{
      width: 260px;
      height: 100%;
      padding: 15px;
      border-right: 1px dashed #ddd;
      list-style: none;
      overflow-y: auto;
      li{
        cursor: pointer;
        padding: 8px;
        margin-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover{
          color: #126ac6;
          background: #eee;
        }
        &.active{
          color: #126ac6;
          background: #eee;
        }
      }
    }
    .main-container{
      padding: 15px;
      flex: 1;
      height: 100%;
    }
  }
</style>
