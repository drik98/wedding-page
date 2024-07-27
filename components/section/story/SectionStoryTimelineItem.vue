<template>
  <div class="wedding_time_line_item">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
}>();
</script>

<style lang="scss" scoped>
@import "~/assets/scss/varriable.scss";

.wedding_time_line_item {
  position: relative;
  &::before {
    position: absolute;
    height: 40px;
    width: 1px;
    background: var(--theme-color);
    left: 50%;
    content: "";
    bottom: -10px;
    opacity: 0.2;
  }
  &:nth-child(4) {
    &::before {
      display: none;
    }
  }
}

h3 {
  font-size: 24px;
  color: var(--theme-color);
  font-weight: 400;
}
p {
  font-size: 16px;
  line-height: 28px;
  font-family: $font1;
}
</style>
