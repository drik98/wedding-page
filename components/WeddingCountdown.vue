<template>
  <div class="weeding_countdown_area">
    <div class="flowaers_top d-none d-lg-block">
      <img src="~/assets/img/flowers.png" alt="" />
    </div>
    <div class="flowaers_bottom d-none d-lg-block">
      <img src="~/assets/img/flowers.png" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section_title text-center">
            <img
              src="~/assets/img/flowers_single.png"
              alt=""
              class="flowers-seperator"
            />
            <span>28. September 2024</span>
            <h3>Der Countdown</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div id="clock" class="countdown_area counter_bg">
            <div class="countdown_wrap d-flex">
              <div class="single_countdown">
                <h3>{{ countdown.days }}</h3>
                <span>Tage</span>
              </div>
              <div class="single_countdown">
                <h3>{{ countdown.hours }}</h3>
                <span>Stunden</span>
              </div>
              <div class="single_countdown">
                <h3>{{ countdown.minutes }}</h3>
                <span>Minuten</span>
              </div>
              <div class="single_countdown">
                <h3>{{ countdown.seconds }}</h3>
                <span>Sekunden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  date: Date;
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
@import '~/assets/scss/responsive.scss';
@import '~/assets/scss/varriable.scss';

.counter_bg {
  background-image: url(~/assets/img/counter_bg/counter_bg.png);
}
.weeding_countdown_area {
  padding-top: 150px;
  padding-bottom: 75px;
  position: relative;
  z-index: 9;
  .flowaers_top,
  .flowaers_bottom {
    img {
      width: 200px;
    }
  }
  .flowaers_top {
    position: absolute;
    top: 102px;
    right: -100px;
    transform: rotate(-10deg);
  }
  .flowaers_bottom {
    position: absolute;
    left: -100px;
    bottom: -200px;
    transform: rotate(10deg);
  }
  @media #{$mobile_device} {
    padding-top: 30px;
    padding-bottom: 30px;
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
          color: #c78665;
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
}
</style>
