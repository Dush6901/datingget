<script setup lang="ts">

interface Props {
    interest: string
}

const props = defineProps<Props>()

</script>

<template>
    <div class="rounded-[10px] bg-primary-gradient p-0.5">
        <div class="bg-background rounded-lg p-1">
            {{interest}}
        </div>
    </div>
</template>
