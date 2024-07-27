<template>
  <div class="base_card program_bg_1 text-center">
    <div class="base_card_inner">
      <slot name="sub-title">
        <span v-if="time">{{ formattedTime }}</span>
      </slot>
      <h3>{{ title }}</h3>
      <slot name="description">
        <p v-if="description">{{ description }}</p>
      </slot>
      <img src="~/assets/img/decoration/ornaments.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: String;
  backgroundImage: String;
  time?: Date;
  description?: String;
}>();

const formattedTime = computed(() =>
  new Intl.DateTimeFormat("de-DE", {
    timeStyle: "short",
  }).format(props.time)
);
</script>

<style lang="scss" scoped>
@import "~/assets/scss/varriable.scss";

.base_card {
  padding: 20px;
  margin-bottom: 30px;
  background-position: center center;
  background-size: cover;
  background-image: v-bind("`url('${backgroundImage}')`");
}

.base_card_inner {
  background: #fff;
  padding: 57px 30px;

  span {
    font-size: 20px;
    font-weight: 400;
    font-family: $font2;
  }
  h3 {
    font-family: $font1;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #e0c9a9;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  ::v-deep(p) {
    font-size: 16px;
    font-family: $font1;
  }
}
</style>
