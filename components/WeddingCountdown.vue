<template>
  <BaseSection>
    <template #title> Der Countdown </template>
    <template #sub-title>
      {{ formattedDate }}
    </template>
    <div class="row">
      <div class="col-xl-12">
        <div id="clock" class="countdown_area counter_bg">
          <div class="countdown_wrap d-flex">
            <div class="single_countdown">
              <ClientOnly>
                <h3>{{ countdown.days }}</h3>
              </ClientOnly>
              <span>Tage</span>
            </div>
            <div class="single_countdown">
              <ClientOnly>
                <h3>{{ countdown.hours }}</h3>
              </ClientOnly>
              <span>Stunden</span>
            </div>
            <div class="single_countdown">
              <ClientOnly>
                <h3>{{ countdown.minutes }}</h3>
              </ClientOnly>
              <span>Minuten</span>
            </div>
            <div class="single_countdown">
              <ClientOnly>
                <h3>{{ countdown.seconds }}</h3>
              </ClientOnly>
              <span>Sekunden</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
const props = defineProps<{
  date: Date;
  formattedDate: String;
}>();

const remainingTime = ref(props.date.getTime() - new Date().getTime());

onMounted(() => {
  setInterval(
    () => (remainingTime.value = props.date.getTime() - new Date().getTime()),
    1000
  );
});

const countdown = computed(() => {
  // If the difference is negative, set all values to 0
  let diffMs = remainingTime.value < 0 ? 0 : remainingTime.value;

  // Calculate the difference in full days
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  diffMs -= diffDays * (1000 * 60 * 60 * 24);

  // Calculate the difference in hours
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  diffMs -= diffHours * (1000 * 60 * 60);

  // Calculate the difference in minutes
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  diffMs -= diffMinutes * (1000 * 60);

  // Calculate the difference in seconds
  const diffSeconds = Math.floor(diffMs / 1000);

  return {
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
    seconds: diffSeconds,
  };
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";

.counter_bg {
  background-image: url(~/assets/img/counter_bg/counter_bg.png);
}
.countdown_area {
  padding: 35px 35px 50px 35px;
  background-size: cover;
  background-position: bottom;

  .countdown_wrap {
    background: #fff;
    justify-content: space-evenly;
    padding-bottom: 36px;
    // padding-top: 21px;
    padding-top: 30px;
    @media #{$mobile_device} {
      display: block !important;
    }
    .single_countdown {
      text-align: center;
      h3 {
        font-size: 60px;
        font-family: $font2;
        font-weight: 400;
        color: #e0c9a9;
        margin-bottom: 17px;
        @media #{$mobile_device} {
          font-size: 30px;
        }
      }
      span {
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
}
</style>
