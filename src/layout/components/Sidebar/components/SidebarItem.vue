<template>
  <el-submenu :index="info.id" v-if="info.children">
    <template #title>
      <i :class="info.meta.icon"></i>
      <span>{{ info.meta.title }}</span>
    </template>
    <el-menu-item-group>
      <sidebar-item
        v-for="item in info.children"
        :info="item"
        :key="item.id"
      ></sidebar-item>
    </el-menu-item-group>
  </el-submenu>

  <el-menu-item :index="info.id" v-else>
    <template #title>{{ info.meta.title }}</template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
});
</script>
