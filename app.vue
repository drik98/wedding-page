<template>
  <SectionBanner id="banner" :formatted-date="formattedWeddingDate" />

  <SectionCountdown
    id="countdown"
    :date="weddingDate"
    :formatted-date="formattedWeddingDate"
  />

  <SectionStory id="story" />

  <SectionGallery id="gallery" />

  <SectionProgram id="program" />

  <SectionContact id="contact" />

  <SectionInformation id="information" />

  <SectionLocation id="location" />

  <SectionFooter />
</template>

<script setup lang="ts">
const weddingDate = useState('weddingDate', () => new Date(new Date("2024-09-28T12:00+02:00")));
const formattedWeddingDate = computed(() =>
  new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(weddingDate.value)
);
</script>
