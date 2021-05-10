/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <div class="home" @click="handleClick('123')">
    {{ data }}
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import {paramData} from '../types/index';
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const data: paramData = reactive({
        name: "北京",
        id: 1,
        user: [{ userid: 123 }],
    });
    const tableData: {
      date: string;
      name: string;
      address: string;
    }[] = reactive([
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
    ]);

    const handleClick = function (str: string) {
      console.log(str);
    };
    return {
      tableData,
      handleClick,
      data,
    };
  },
});
</script>
