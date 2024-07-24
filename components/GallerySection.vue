<template>
  <BaseSection :hide-decoration="true" class="gallery_area">
    <template #title>Gallerie</template>
    <div class="container-fluid p-0">
      <div class="row grid no-gutters">
        <div
          v-for="image in images"
          class="col-xl-4 col-md-6 col-lg-6 grid-item"
        >
          <img :src="image" class="single_gallery" />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
const images = shallowReadonly([
  "/img/gallery/1.png",
  "/img/gallery/2.png",
  "/img/gallery/3.png",
  "/img/gallery/4.png",
  "/img/gallery/5.png",
  "/img/gallery/6.png",
  "/img/gallery/7.png",
  "/img/gallery/8.png",
  "/img/gallery/9.png",
]);
</script>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";

.gallery_area {
  padding: 0 50px;
  padding-top: 90px;
  @media #{$mobile_device} {
    padding: 0;
  }
}

.single_gallery {
  height: 40vh;
}
.grid-item {
  overflow: hidden;
  padding: 0.5rem !important;
}
</style>
