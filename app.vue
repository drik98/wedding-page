<template>
  <!-- slider_area -->
  <div class="slider_area">
    <div class="slider_area_inner slider_bg_1 overlay2">
      <div class="slider_text text-center">
        <img src="~/assets/img/flowers_circle.png" alt="" class="flowers" />
        <div class="text_inner">
          <h4>{{ formattedWeddingDate }}</h4>
          <h3>Anna & Hendrik</h3>
          <span>heiraten!</span>
        </div>
      </div>
    </div>
  </div>
  <!--/ slider_area -->

  <WeddingCountdown
    :date="weddingDate"
    :formatted-date="formattedWeddingDate"
  />

  <LoveStory />

  <!-- gallery_area  -->
  <div class="gallery_area">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section_title text-center">
            <img
              src="~/assets/img/flowers_single.png"
              alt=""
              class="flowers-seperator"
            />
            <h3>Gallery. Photos</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="row grid no-gutters">
        <div class="col-xl-4 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_1">
            <a class="popup-image" href="~/assets/img/gallery/1.png"> </a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_2">
            <a class="popup-image" href="~/assets/img/gallery/2.png"> </a>
          </div>
        </div>
        <div class="col-xl-5 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_3">
            <a class="popup-image" href="~/assets/img/gallery/3.png"> </a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_4">
            <a class="popup-image" href="~/assets/img/gallery/4.png"> </a>
          </div>
        </div>
        <div class="col-xl-5 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_5">
            <a class="popup-image" href="~/assets/img/gallery/5.png"> </a>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_6">
            <a class="popup-image" href="~/assets/img/gallery/6.png"> </a>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_7">
            <a class="popup-image" href="~/assets/img/gallery/7.png"> </a>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_8">
            <a class="popup-image" href="~/assets/img/gallery/8.png"> </a>
          </div>
        </div>
        <div class="col-xl-5 col-md-6 col-lg-6 grid-item">
          <div class="single_gallery gallery_imag_9">
            <a class="popup-image" href="~/assets/img/gallery/9.png"></a>
          </div>
        </div>
      </div>
      <!-- <div class="grid row">
                <div class="single_image grid-item">
                    <img src="~/assets/img/gallery/1.png" alt="">
                </div><div class="single_image grid-item">
                    <img src="~/assets/img/gallery/2.png" alt="">
                </div><div class="single_image grid-item">
                    <img src="~/assets/img/gallery/3.png" alt="">
                </div>
            </div> -->
    </div>
  </div>
  <!--/ gallery_area  -->

  <!-- program_details -->
  <div class="program_details_area">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section_title text-center">
            <img
              src="~/assets/img/flowers_single.png"
              alt=""
              class="flowers-seperator mirrored"
            />
            <h3>Program. Details</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-4">
          <div class="single_program program_bg_1 text-center">
            <div class="program_inner">
              <span> 16.00 </span>
              <h3>Wedding Ceremony</h3>
              <p>
                Many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some content of a page when
                looking at its layout.
              </p>
              <img src="~/assets/img/program_details/ornaments.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4">
          <div class="single_program program_bg_2 text-center">
            <div class="program_inner">
              <span> 20.00 </span>
              <h3>Lunch Time</h3>
              <p>
                Many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some content of a page when
                looking at its layout.
              </p>
              <img src="~/assets/img/program_details/ornaments.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4">
          <div class="single_program program_bg_3 text-center">
            <div class="program_inner">
              <span> 22.00 </span>
              <h3>WeParty Time</h3>
              <p>
                Many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some content of a page when
                looking at its layout.
              </p>
              <img src="~/assets/img/program_details/ornaments.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/ program_details -->

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
const weddingDate = ref(new Date("2024-09-28T12:00"));
const formattedWeddingDate = computed(() =>
  new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(weddingDate.value)
);
</script>
