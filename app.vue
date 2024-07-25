<template>
  <WeddingBanner id="banner" :formatted-date="formattedWeddingDate" />

  <WeddingCountdown
    id="countdown"
    :date="weddingDate"
    :formatted-date="formattedWeddingDate"
  />

  <LoveStory id="story" />

  <GallerySection id="gallery" />

  <ProgramDetails id="program" />

  <ContactForm id="contact" />

  <LocationMap id="location" />

  <FooterSection />
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
