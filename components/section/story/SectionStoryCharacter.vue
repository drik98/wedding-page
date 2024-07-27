<template>
  <div class="story_character text-center">
    <div class="story_thumb">
      <slot name="image"></slot>
    </div>
    <span>{{ title }}</span>
    <h3>{{ name }}</h3>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  name: string;
  description: string;
}>();
</script>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import '~/assets/scss/mixins.scss';

.story_character {
  margin-bottom: 30px;
}

.story_thumb {
    width: 247px;
    height: 247px;
    @include border-radius(50%);
    position: relative;
    margin: auto;
    ::v-deep(img) {
      width: 100%;
      @include border-radius(50%);
    }
    &:before {
      position: absolute;
      content: "";
      left: 10px;
      top: 10px;
      bottom: 10px;
      right: 10px;
      border: 2px solid #fff;
      @include border-radius(50%);
    }
  }
  span {
    font-size: 24px;
    font-weight: 400;
    margin-top: 33px;
    display: block;
    margin-bottom: 11px;
  }
  h3 {
    font-size: 36px;
    color: #e0c9a9;
    @media #{$mobile_device} {
      font-size: 30px;
    }
  }
  p {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 28px;
  }
</style>
