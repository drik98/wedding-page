<template>
  <div class="single_program program_bg_1 text-center">
    <div class="program_inner">
      <span>{{ formattedTime }}</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <img src="~/assets/img/program_details/ornaments.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  backgroundImage: String;
  time: Date;
  title: String;
  description: String;
}>();

const formattedTime = computed(() =>
  new Intl.DateTimeFormat("de-DE", {
    timeStyle: "short",
  }).format(props.time)
);
</script>

<style lang="scss" scoped>
@import "~/assets/scss/varriable.scss";

.single_program {
  padding: 20px;
  margin-bottom: 30px;
  background-position: center center;
  background-size: cover;
  background-image: v-bind("`url('${backgroundImage}')`");
}

.program_inner {
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
  p {
    font-size: 16px;
    font-family: $font1;
  }
}
</style>
