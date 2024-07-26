<template>
  <BaseSection :hide-decoration="true" class="gallery_area">
    <template #title>Gallerie</template>
    <div class="upload_pictures">
      <p class="text-center">
        Hier wird in Zukunft eine Auswahl an Bildern von unserer Hochzeit
        angezeigt.<br/>
        Falls du Bilder hochladen möchtests oder an der Foto-Challenge teilnehmen willst, 
        kannst du das sehr gerne über Everlense tun.
      </p>
      <img
        class="qr_code"
        src="https://d1pdemv5rxm2ni.cloudfront.net/104296%2Fmedia-librarynzVDRZ?response-content-disposition=attachment%3B%20filename%3D%22media-librarynzVDRZ%22%3B%20filename%2A%3DUTF-8%27%27media-librarynzVDRZ&amp;Expires=1721996610&amp;Signature=Ms3QXTrY63Ow~FzfvI4yHhrh2DIZU6xUWF5JMkHDetJZCsJCaBMPl1jr1cQOXkzqMGLJCKZ081ziYHj2S6OCq2PglAtiMLb~PfZ816QL4buWMJYFwNazVy0v1giEx34SDdXsMnZWENYWmg7Dkie-o8tuNYT3h1Z9jmU7iEqY6nOkjiBQpFCpDQTTt7wtVIIlBGsg9AYgmJYMOAAQ5kdi-HDUAq7GTNOXo3OQsGPKRVfb7dP-AOXINXDZ7wwtnW1EN~ORDdzweDf3l9Gijb1epgHJy4KigqKVfjYUjWnp1rw2tfZeJFbwB~gT6pLiP1PtHjIY4J-C6kKUmif3Gfbm5g__&amp;Key-Pair-Id=K3GVYHZZ5TCFYR"
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
