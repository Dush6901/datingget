<script setup lang="ts">

interface Props {
  label: string
  options: string[]
}

defineProps<Props>()

const isOpen = ref(false)
const model = defineModel<string>()

const change = (newValue: string) => {
  model.value = newValue
  isOpen.value = false
}

</script>

<template>
  <div class="relative flex flex-col gap-0.5">

    <!-- LABEL -->
    <h5 class="font-display text-[16px] font-semibold">
      {{ label }}
    </h5>

    <!-- SELECT -->
    <div class="w-full cursor-pointer rounded-[9px] bg-primary-gradient p-px">
      <div
        @click="isOpen = !isOpen"
        class="flex items-center justify-between rounded-lg bg-background p-2.5"
      >
        <p :class="model ? 'text-foreground' : 'text-muted'">
          {{ model || 'Выберите значение' }}
        </p>

        <img
          src="/icons/arrowUp-ico.svg"
          alt="arrow-up"
          class="h-6 w-6 transition-transform duration-300"
          :class="isOpen ? 'rotate-180' : ''"
        />
      </div>
    </div>

    <!-- DROPDOWN -->
    <div
      v-if="isOpen"
      class="absolute left-0 top-full z-50 mt-1 w-full rounded-[9px] bg-primary-gradient p-px"
    >

      <!-- OPTIONS -->
      <div
        class="flex max-h-55 flex-col gap-1 overflow-y-auto rounded-lg bg-background p-2.5"
      >

        <div
          v-for="value in options"
          :key="value"
          @click="change(value)"
          class="group relative shrink-0 cursor-pointer overflow-hidden rounded-md px-2.5 py-2"
        >

          <!-- HOVER -->
          <div
            class="absolute inset-0 bg-primary-gradient opacity-0 transition-opacity duration-200 group-hover:opacity-15"
          ></div>

          <!-- TEXT -->
          <p class="relative z-10">
            {{ value }}
          </p>

        </div>

      </div>

    </div>

  </div>
</template>