<template>
  <BaseSection class="section_program">
    <template #title>Programm</template>
    <div class="row">
      <div class="col-xl-4 col-lg-4">
        <BaseCard 
          background-image="/img/program/1.png"
          title="Standesamtliche Hochzeit"
          :time="new Date('2024-09-28T12:00+02:00')"
        >
        <template #description>
          <p>
            Die standesamtliche Hochzeit findet im
            <a href="https://maps.app.goo.gl/r4xcM34PXLqhdhiT8" target="_blank">Aachener Rathaus</a> 
            im weißen Saal statt.
            Auch wenn nicht für jeden Platz ist, freuen wir uns über alle, die zum Anstoßen auf dem Marktplatz vorbei kommen.
          </p>
        </template>
      </BaseCard>
      </div>
      <div class="col-xl-4 col-lg-4">
        <BaseCard 
          background-image="/img/program/2.png"
          title="Freie Trauung"
          :time="new Date('2024-09-28T16:30+02:00')"
        >
        <template #description>
          <p>
            Die freie Trauung ist unser absolutes Highlight. Sie findet an der <a href="#location">Location "La Seigneurie"</a> in Raeren statt. Wir freuen uns darauf vor allen unseren Freunden und Familie uns unsere Eheversprechen zu geben.
          </p>
        </template>
        </BaseCard>
      </div>
      <div class="col-xl-4 col-lg-4">
        <BaseCard 
          background-image="/img/program/3.png"
          title="Party"
          description="Die Party wird eingeleitet durch den traditionellen Hochzeitstanz durch das Brautpaar. Im Anschluss darf jeder dazu kommen und die Party so richtig losgehen lasen!"
          :time="new Date('2024-09-28T21:00+02:00')"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.section_program {
  padding-bottom: 120px;
  padding-top: 120px;
}
</style>
