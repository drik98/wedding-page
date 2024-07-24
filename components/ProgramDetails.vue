<template>
  <BaseSection class="program_details_area">
    <template #title>Programm</template>
    <div class="row">
      <div class="col-xl-4 col-lg-4">
        <div class="single_program program_bg_1 text-center">
          <div class="program_inner">
            <span> 16.00 </span>
            <h3>Wedding Ceremony</h3>
            <p>
              Many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some content of a page when
              looking at its layout.
            </p>
            <img src="~/assets/img/program_details/ornaments.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4">
        <div class="single_program program_bg_2 text-center">
          <div class="program_inner">
            <span> 20.00 </span>
            <h3>Lunch Time</h3>
            <p>
              Many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some content of a page when
              looking at its layout.
            </p>
            <img src="~/assets/img/program_details/ornaments.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4">
        <div class="single_program program_bg_3 text-center">
          <div class="program_inner">
            <span> 22.00 </span>
            <h3>WeParty Time</h3>
            <p>
              Many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some content of a page when
              looking at its layout.
            </p>
            <img src="~/assets/img/program_details/ornaments.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/varriable.scss";

.program_bg_1 {
  background-image: url(~/assets/img/program_details/1.png);
}
.program_bg_2 {
  background-image: url(~/assets/img/program_details/2.png);
}
.program_bg_3 {
  background-image: url(~/assets/img/program_details/3.png);
}
.program_details_area {
  padding-bottom: 120px;
  padding-top: 120px;
}
.single_program {
  padding: 20px;
  margin-bottom: 30px;
  background-position: center center;
  background-size: cover;
  .program_inner {
    background: #fff;
    padding: 57px 30px;

    span {
      font-size: 20px;
      font-weight: 400;
      font-family: $font2;
    }
    h3 {
      font-family: $font1;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #e0c9a9;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      font-family: $font1;
    }
  }
}
</style>
