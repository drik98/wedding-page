<template>
  <section class="section_location">
    <div class="location_info">
      <div class="location_inner">
        <div class="location_top text-center">
          <h3>Location</h3>
          <p>La Seigneurie, Wesselbend 47, 4731 Raeren, Belgien<br /></p>
        </div>
        <div class="address_info_container d-flex justify-content-between">
          <div class="adress_info text-center">
            <h4>Parken</h4>
            <p>
              Direkt vor der Location befindet sich ein großer
              Schotterparkplatz.
            </p>
          </div>
          <div class="adress_info text-center">
            <h4>Taxi</h4>
            <p>
              <a href="https://citycab-aachen.de/">https://citycab-aachen.de/</a
              ><br />
              <a href="tel:+4924140006988">+49 241 40006988 </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="map_container container-fluid p-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5053.170467400301!2d6.092095087675836!3d50.709081942220855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09b68d2c0f443%3A0xf55c0efb82312bca!2sKERRES%20-%20La%20Seigneurie%20-%20Eventlocation!5e0!3m2!1sen!2sde!4v1721813044131!5m2!1sen!2sde"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="KERRES - La Seigneurie - Eventlocation - Google Maps"
      ></iframe>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/varriable.scss";
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/mixins.scss";

.section_location {
  padding: 0 50px;
  position: relative;
  @media #{$mobile_device} {
    display: flex;
    flex-direction: column;
  }
}
.location_info {
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 9;
  // transform: translateX(-50%);
  @include transform(translateX(-50%));
  @media #{$mobile_device} {
    @include transform(translateX(0%));
    left: 0%;
    position: relative;
  }
  .location_inner {
    background: #fff;
    width: 616px;
    max-width: 616px;
    // padding: 37px 60px 50px 60px;
    padding: 54px 60px 54px 60px;
    @media #{$mobile_device} {
      padding: 20px;
      width: 100%;
      bottom: 0;
    }
    .location_top {
      margin-bottom: 42px;
    }
    h3 {
      font-size: 36px;
      font-weight: 400;
      color: var(--theme-color);
    }
    p {
      color: #727272;
      font-size: 16px;
      font-family: $font1;
      line-height: 28px;
      margin-bottom: 0;
      font-weight: 400;
      span {
        color: var(--theme-color);
      }
    }
    .address_info_container {
      @media #{$mobile_device} {
        flex-direction: column;
        gap: 1rem;
      }
      .adress_info {
        width: 50%;

        @media #{$mobile_device} {
          width: 100%;
        }

        h4 {
          color: var(--theme-color);
          font-size: 16px;
          font-family: $font1;
          font-weight: 600;
        }
        p {
          color: #727272;
          font-size: 15px;
          font-family: $font1;
          font-weight: 400;
          line-height: 26px;
        }
      }
    }
  }
}

.map_container {
  height: 90vh;

  @media #{$mobile_device} {
    height: 40vh;
  }
}
</style>
