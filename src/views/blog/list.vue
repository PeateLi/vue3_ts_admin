<template>
    <div>
        {{title}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const title = '博客列表'
        return {
            title
        }
    }
})
</script>
