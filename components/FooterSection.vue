<template>
  <footer class="footer">
    <div class="footer_top">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="quick_links">
              <ul>
                <li><a href="#banner">Start</a></li>
                <li><a href="#countdown">Countdown</a></li>
                <li><a href="#story">Unsere Geschichte</a></li>
                <li><a href="#gallery">Gallerie</a></li>
                <li><a href="#program">Programm</a></li>
                <li><a href="#contact">Kontakt</a></li>
                <li><a href="#location">Location</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copy-right_text">
      <div class="container">
        <div class="footer_border"></div>
        <div class="row">
          <div class="col-xl-12">
            <p class="copy_right text-center">
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy; {{ currentYear }}
              All rights reserved | This template is made with
              <i class="fa fa-heart-o" aria-hidden="true"></i> by
              <a href="https://colorlib.com" target="_blank">Colorlib</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";

.footer {
  background: #fffaf2;
}
.footer_top {
  text-align: center;
  padding: 73px 0;
  ul {
    li {
      display: inline-block;
      a {
        font-size: 15px;
        font-family: $font1;
        margin: 0 27px;
        color: #1f1f1f;
        @media #{$mobile_device} {
          margin: 0 5px;
        }
        &:hover {
          color: #e0c9a9;
        }
      }
    }
  }
}
.copy-right_text {
  padding-bottom: 30px;
  background: #fff;
  .footer_border {
    padding-bottom: 30px;
  }
  .copy_right {
    font-size: 14px;
    color: #919191;
    margin-bottom: 0;
    font-weight: 400;
    font-family: $font1;

    @media #{$mobile_device} {
      font-size: 14px;
    }
    a {
      color: #e0c9a9;
    }
  }
}
</style>
