<template>
  <router-view />
</template>

<style lang="scss">
body,
html {
  height: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, 微软雅黑, Arial, sans-serif;
}
</style>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const store = useStore();
    const savaStore = function () {
      sessionStorage.setItem('state', JSON.stringify(store.state));
    };
    window.addEventListener('beforeunload', savaStore);
    const getStore = async () => {
      let state = sessionStorage.getItem('state');
      if (state) {
        store.replaceState(Object.assign({}, store.state, JSON.parse(state)));

        sessionStorage.removeItem('state');
      }
    };
    getStore();
  }
});
</script>
