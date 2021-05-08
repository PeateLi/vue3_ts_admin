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
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let editableTabsValue = "2";
    let editableTabs: {
      title: string;
      name: string;
      content: string;
    }[] = [
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
    ];
    let tabIndex = 2;
    return {
      editableTabsValue,
      editableTabs,
      tabIndex,
    };
  },
  methods: {
    addTab() {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName: string) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
});
</script>

<style lang="scss" scoped>
 .el-tabs--card ::v-deep .el-tabs__header{
    border-bottom: 0px;
    margin-top: 19px;
}
</style>
