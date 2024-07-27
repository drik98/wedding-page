<template>
  <BaseSection class="information_section">
    <template #title>Informationen</template>
    <div class="row">
      <div class="col-xl-4 col-lg-4">
        <BaseCard 
          background-image="/img/information/dresscode.jpg"
          title="Dresscode „Formal“"
          description="Smoking und Abendrobe sind nicht vorgeschrieben, aber gern gesehen. 
          Beispielsweise ein bodenlanges Kleid, Cocktailkleid oder Jumpsuit.
          Zum Anzug kann gerne auch eine Fliege statt Krawatte angezogen werden."
        />
      </div>
      <div class="col-xl-4 col-lg-4">
        <BaseCard 
          background-image="/img/information/catering.jpg"
          title="Verpflegung"
          description="Softgetränke, Kaffe, Bier, Sekt & Wein können jederzeit getrunken werden.
          Dazu gibt es noch eine kleine Auswahl an Schnäpsen sowie eine Whiskeybar.
          Nach der freien Trauung gibt es Kaffe & Kuchen.
          Vor der Party gibt es noch einen Snack mit veganen Optionen.
          Während der Party gibt es eine Candybar."
        />
      </div>
      <div class="col-xl-4 col-lg-4">
        <BaseCard 
          background-image="/img/information/gifts.jpg"
          title="Geschenke"
          description="Falls du uns etwas schenken möchstest bitten wir um eine finanzielle Unterstützung für unsere Safari nach Kenia in unseren Flitterwochen."
        />
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.information_section {
  padding-bottom: 120px;
  padding-top: 120px;
}
</style>
