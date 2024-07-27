<template>
  <BaseSection :hide-decoration="true" class="section_gallery">
    <template #title>Galerie</template>
    <div class="upload_pictures">
      <p class="text-center">
        Hier wird in Zukunft eine Auswahl an Bildern von unserer Hochzeit
        angezeigt.<br/>
        Falls du Bilder hochladen möchtests oder an der Foto-Challenge teilnehmen willst, 
        kannst du das sehr gerne über Everlense tun.
      </p>
      <img
        class="qr_code"
        src="~/assets/img/gallery/everlense_qr.png"
        alt="QR Code linking to the everlense link underneath"
      />
      <a
          href="https://app.everlense.de/event/zx1icwihN5vfaZLycxJNn"
          target="_blank"
          >Everlense</a
        >
    </div>
    <div v-if="images.length" class="container-fluid p-0">
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
const images = shallowReadonly([]);
</script>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";

.section_gallery {
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

.upload_pictures {
  display: flex;
  flex-direction: column;
  align-items: center;

  &, p {
    color: #727272;
    font-family: $font1;
  }
}

p {
  margin: 0;
}

.qr_code {
  width: 10vw;
  margin: 1.5rem 0 0.5rem 0;
}
</style>
