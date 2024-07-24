<template>
  <BaseSection class="program_details_area">
    <template #title>Programm</template>
    <div class="row">
      <div class="col-xl-4 col-lg-4">
        <ProgramCard 
          background-image="/img/program_details/1.png"
          title="Standesamtliche Hochzeit"
          description="Die standesamtliche Hochzeit findet im Aachener Rathaus im weißen Saal statt. Auch wenn nicht für jeden Platz ist, freuen wir uns über alle, die zum Anstoßen auf dem Marktplatz vorbei kommen."
          :time="new Date('2024-09-28T12:00+02:00')"
        />
      </div>
      <div class="col-xl-4 col-lg-4">
        <ProgramCard 
          background-image="/img/program_details/2.png"
          title="Freie Trauung"
          description="Die freie Trauung ist unser absolutes Highlight. Sie findet an der Location &quot;La Seigneurie&quot; in Raeren statt. Wir freuen uns darauf vor allen unseren Freunden und Familie uns unsere Eheversprechen zu geben."
          :time="new Date('2024-09-28T16:30+02:00')"
        />
      </div>
      <div class="col-xl-4 col-lg-4">
        <ProgramCard 
          background-image="/img/program_details/3.png"
          title="Party"
          description="Die Party wird eingeleitet durch den traditionellen Hochzeitstanz durch das Brautpaar. Im Anschluss darf jeder dazu kommen und die Party so richtig losgehen lasen!"
          :time="new Date('2024-09-28T21:00+02:00')"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.program_details_area {
  padding-bottom: 120px;
  padding-top: 120px;
}
</style>
