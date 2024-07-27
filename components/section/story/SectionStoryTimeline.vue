<template>
  <div class="wedding_time_line text-center">
    <slot></slot>
  </div>
</template>


<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";
@import "~/assets/scss/mixins.scss";

.wedding_time_line {
  background: #fffaf2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
