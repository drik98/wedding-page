<template>
  <div class="banner_area">
    <div class="banner_area_inner overlay">
      <div class="banner_text text-center">
        <img src="~/assets/img/decoration/flowers_circle.png" alt="" class="flowers" />
        <div class="text_inner">
          <h4>{{ formattedDate }}</h4>
          <h3>Anna & Hendrik</h3>
          <span>heiraten!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  formattedDate: String;
}>();
</script>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";
@import "~/assets/scss/mixins.scss";

.overlay {
  position: relative;
  z-index: 0;
  background-image: url(~/assets/img/banner/plitvice.jpg);
}
.overlay::before {
  position: absolute;
  content: "";
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.2;
}

.banner_area {
  padding: 25px 50px;
  background: #fff;
  @media #{$mobile_device} {
    padding: 10px 20px;
  }
}
.banner_area_inner {
  height: 800px;
  position: relative;
  z-index: 8;
  position: relative;
  z-index: 8;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media #{$mobile_device} {
    height: 420px;
  }
  @media #{$tablet_device} {
    height: 500px;
  }
  @media #{$mid_device} {
    height: 700px;
    background-position: right;
  }
  @media #{$large_device} {
    height: 800px;
    background-position: right;
  }
}

.banner_text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 126px 55px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  max-width: 80vw;
  aspect-ratio: 1 / 1;
  @include border-radius(50%);
  z-index: 10;
  @media #{$mobile_device} {
    transform: translate(0%, -50%);
    padding: 35px 25px;
    left: 0;
    padding: 35px 25px;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
  }
  @media #{$tablet_device} {
    transform: translate(0%, -50%);
    padding: 35px 25px;
    left: 0;
    padding: 35px 25px;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
  }
  @media #{$mid_device} {
    transform: translateX(-50%) translateY(-50%);
    padding: 70px 25px;
  }
  .text_inner {
    position: relative;
  }
  h4 {
    font-size: 16px;
    font-weight: 600;
    font-family: $font1;
    color: #e0c9a9;
    margin-top: 5px;
  }
  h3 {
    font-size: 24px;
    font-family: $font2;
    font-weight: 400;
    color: #e0c9a9;
    line-height: 46px;
    @media #{$mobile_device} {
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
    }
    @media #{$tablet_device} {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
  }
  span {
    font-size: 18px;
    font-family: $font2;
    font-weight: 400;
    color: #e0c9a9;
    @media #{$mobile_device} {
      font-size: 14px;
    }
  }
  &:before {
    position: absolute;
    content: "";
    right: -40px;
    bottom: -25px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #e0c9a9;
    top: -30px;
    left: -20px;
    z-index: -3;
    @media #{$mobile_device} {
      display: none;
    }
    @media #{$tablet_device} {
      display: none;
    }
    @media #{$mid_device} {
      display: none;
    }
  }
  &:after {
    position: absolute;
    content: "";
    right: -25px;
    bottom: -25px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #f2c64d;
    top: -30px;
    left: -40px;
    z-index: -3;
    @media #{$mobile_device} {
      display: none;
    }
    @media #{$tablet_device} {
      display: none;
    }
    @media #{$mid_device} {
      display: none;
    }
  }
}

.flowers {
  position: absolute;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
