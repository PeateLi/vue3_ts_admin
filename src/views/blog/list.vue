<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const title = reactive({
      text: '博客列表'
    });
    return {
      title
    };
  }
});
</script>
