<template>
  <WeddingBanner :formatted-date="formattedWeddingDate"/>

  <WeddingCountdown
    :date="weddingDate"
    :formatted-date="formattedWeddingDate"
  />

  <LoveStory />

  <GallerySection/>

  <ProgramDetails/>

  <ContactForm/>

  <LocationMap/>

  <!-- footer_start -->
  <footer class="footer">
    <div class="footer_top">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="quick_links">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Accommodation</a></li>
                <li><a href="#">Contact</a></li>
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
              Copyright &copy; 2024
              <!-- <script>
                document.write(new Date().getFullYear());
              </script> -->
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
  <!-- footer_end -->
</template>

<script setup lang="ts">
const weddingDate = ref(new Date("2024-09-28T12:00+02:00"));
const formattedWeddingDate = computed(() =>
  new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(weddingDate.value)
);
</script>

<style lang="scss" scoped>
// todo: remove me when everything is migrated to components
.flowers-seperator {
  width: 300px;
}

.flowers-seperator.mirrored {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
