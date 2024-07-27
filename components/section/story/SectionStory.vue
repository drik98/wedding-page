<template>
  <BaseSection>
    <template #title>Unsere Geschichte</template>
    <div class="row">
      <div class="col-xl-4 col-md-6 col-lg-4">
        <SectionStoryCharacter
          title="Der Bräutigam"
          name="Hendrik Schmitz"
          description="Aufgewachsen in Alsdorf, nach dem Studium dann nach Würselen gezogen und schließlich dann
          zusammen mit Anna nach Aachen, wo wir auch gar nicht mehr weg wollen.
          Durch Anna außerdem die Liebe zum Reisen und Laufen neuentdeckt, aber auch immer für einen
          gemütlichen Spieleabend, gememeinsames Kochen oder einfach nur ein Abend auf der Couch zu haben."
        >
          <template #image>
            <img
              src="~/assets/img/story/hendrik.jpg"
              alt="Hendrik beim Sonnenuntergang in Conil"
            />
          </template>
        </SectionStoryCharacter>
      </div>
      <div class="col-xl-4 col-md-6 col-lg-4">
        <SectionStoryTimeline>
          <SectionStoryTimelineItem
            title="Kennenlernen"
            description="Anfang 2020 hatten wir unser erstes Date. Nur ein paar Meter entfernt von unserer späteren ersten gemeinsamen Wohnung."
          />
          <SectionStoryTimelineItem
            title="Zusammenziehen"
            description="Nach nur einem Jahr wollten wir nicht mehr ohne den anderen und sind zusammen in die Pontstraße gezogen."
          />
          <SectionStoryTimelineItem
            title="Verlobung"
            description="Bei unserem Roadtrip durch Kroatien haben wir uns im September 2023 vor den wunderschönen Wasserfällen bei den Plitvicer Seen verlobt."
          />
          <SectionStoryTimelineItem
            title="Hochzeit"
            description="Fast genau ein Jahr nach unserer Verlobung werden wir uns vor Freunden & Familie das Ja-Wort geben."
          />
        </SectionStoryTimeline>
      </div>
      <div class="col-xl-4 col-lg-4">
        <SectionStoryCharacter
          title="Die Braut"
          name="Anna Sieweck"
          description="Anna ist blöd"
        >
          <template #image>
            <img
              src="~/assets/img/story/anna.jpg"
              alt="Bild von Anna auf dem sie stolz ihren Ring präsentiert."
            />
          </template>
        </SectionStoryCharacter>
      </div>
    </div>
  </BaseSection>
</template>
