<template>
  <div class="box_section">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
          <div class="box_content">
            <div class="flower flower_top d-none d-lg-block">
              <img src="~/assets/img/decoration/flowers.png" alt="" />
            </div>
            <div class="flower flower_bottom d-none d-lg-block">
              <img src="~/assets/img/decoration/flowers.png" alt="" />
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <div class="popup_box">
                  <div class="popup_inner">
                    <div class="form_heading text-center">
                      <h3><slot name="title"></slot></h3>
                      <p><slot name="sub-title"></slot></p>
                    </div>
                    <slot></slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";
@import "~/assets/scss/mixins.scss";

.box_section {
  padding-top: 95px;
  padding-bottom: 280px;

  @media #{$mobile_device} {
    padding-top: 0;
    padding-bottom: 80px;
  }
  @media #{$tablet_device} {
    padding-top: 0;
    padding-bottom: 40px;
  }
  .box_content {
    position: relative;
    z-index: 9;

    .flower img {
      width: 200px;
    }

    .flower_top {
      position: absolute;
      top: -240px;
      transform: rotate(-80deg);
      left: 150px;
    }
    .flower_bottom {
      position: absolute;
      right: 150px;
      bottom: -240px;
      transform: rotate(100deg);
    }
    .popup_box {
      background: #fff;
      display: inline-block;
      z-index: 9;
      padding: 51px 40px 60px 40px;
      @include box-shadow(0 10px 30px rgba(0, 0, 0, 0.05));
      @media #{$mobile_device} {
        padding: 20px;
      }
      h3 {
        text-align: center;
        font-size: 36px;
        color: #e0c9a9;
        @media #{$mobile_device} {
          font-size: 25px;
        }
      }
      p {
        font-size: 15px;
        color: #727272;
        font-family: $font1;
        margin-bottom: 34px;
      }
    }
  }
}
</style>
