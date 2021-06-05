<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    tab-position="bottom"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
interface tabType<T> {
  [key: string]: T;
}
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    let editableTabsValue = ref<string>("2");
    let editableTabs: tabType<string>[] = reactive([
      {
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content",
      },
      {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content",
      },
      {
        title: "Tab 3",
        name: "3",
        content: "Tab 3 content",
      },
      {
        title: "Tab 4",
        name: "4",
        content: "Tab 4 content",
      },
      {
        title: "Tab 5",
        name: "5",
        content: "Tab 5 content",
      },
      {
        title: "Tab 6",
        name: "6",
        content: "Tab 6 content",
      },
    ]);
    let tabIndex = ref<number>(2);
    const addTab = function (): void {
      let newTabName: string = ++tabIndex.value + "";
      editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      editableTabsValue.value = newTabName;
    };
    const removeTab = function (targetName: string): void {
      console.log(targetName);
      let tabs: tabType<string>[] = editableTabs;
      let activeName: string = editableTabsValue.value;
      if (activeName === targetName) {
        tabs.forEach((tab: tabType<string>, index: number) => {
          if (tab.name === targetName) {
            let nextTab: any = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      editableTabsValue.value = activeName;
      editableTabs.length = 0;
      let newabsData = tabs.filter(
        (tab: tabType<string>) => tab.name !== targetName
      );
      newabsData.map((x) => {
        editableTabs.push(x);
      });
      console.log(editableTabs);
    };
    return {
      editableTabsValue,
      editableTabs,
      tabIndex,
      addTab,
      removeTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-tabs--card ::v-deep .el-tabs__header {
  border-bottom: 0px;
  margin-top: 19px;
}
</style>
