<template>
  <div class="base_section">
    <template v-if="!hideDecoration">
      <div class="flowaers_top d-none d-lg-block">
        <img src="~/assets/img/decoration/flowers.png" alt="" />
      </div>
      <div class="flowaers_bottom d-none d-lg-block">
        <img src="~/assets/img/decoration/flowers.png" alt="" />
      </div>
    </template>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section_title text-center">
            <img
              src="~/assets/img/decoration/flowers_single.png"
              alt=""
              class="flowers-seperator"
            />
            <span><slot name="sub-title"></slot></span>
            <h3><slot name="title"></slot></h3>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  hideDecoration?: Boolean;
}>();
</script>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";

.flowers-seperator {
  width: 20vw;
}

.flowers-seperator.mirrored {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.base_section {
  padding-top: 150px;
  padding-bottom: 75px;
  position: relative;
  z-index: 9;

  @media #{$mobile_device} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.flowaers_top,
.flowaers_bottom {
  img {
    width: 200px;
  }
}
.flowaers_top {
  position: absolute;
  top: 102px;
  right: -100px;
  transform: rotate(-10deg);
}
.flowaers_bottom {
  position: absolute;
  left: -100px;
  bottom: -200px;
  transform: rotate(10deg);
}

.section_title {
  margin-bottom: 62px;
  @media #{$mobile_device} {
    margin-bottom: 25px;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    font-family: $font1;
    color: var(--theme-color);
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 36px;
    font-family: $font1;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 20px;
    @media #{$mobile_device} {
      font-size: 25px;
    }
  }
}
</style>
