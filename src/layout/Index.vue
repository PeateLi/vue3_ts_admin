<template>
  <div class="layout_index">
    <el-container>
      <el-aside width="200px">
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header> 
            <navbar></navbar>
        </el-header>
        <el-main>
          <el-card class="box-card">
            <router-view />
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Sidebar , Navbar } from "./components/index";
export default defineComponent({
  components: { Sidebar , Navbar },
});
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  height: 100vh;
  .layout_index {
    height: 100%;
    .el-container {
      height: 100%;
    }
  }
}
.el-header{
    box-shadow: 1px 1px 20px 0px  #EBEEF5;
}
</style>
