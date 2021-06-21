<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <sidebar-item
      v-for="item in menu"
      :info="item"
      :key="item.id"
    ></sidebar-item>
  </el-menu>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, defineAsyncComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  components: {
    SidebarItem: defineAsyncComponent({
      loader: () => import('./components/SidebarItem.vue')
    })
  },
  data(){
    return{
      menu:[] as any
    }
    
  },
  mounted(){
    setTimeout(() => {
      this.menu = this.$store.state.user.menus
    },0)
      
  }
});
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
::v-deep .el-menu-item-group__title {
  padding: 0px;
}
</style>
