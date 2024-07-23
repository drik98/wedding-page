<template>
  <BaseSection>
    <template #title>Unsere Geschichte</template>
    <div class="row">
      <div class="col-xl-4 col-md-6 col-lg-4">
        <div class="single_lover_story text-center">
          <div class="story_thumb">
            <img src="~/assets/img/story/1.png" alt="" />
          </div>
          <span>Groom</span>
          <h3>Jack Wonner</h3>
          <p>
            Many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            Content here content here, making it look like readable English.
            Many desktop publishing packages and web page editors now use.
          </p>
          <div class="social_links">
            <ul>
              <li>
                <a href="#"> <i class="fa fa-facebook"></i> </a>
              </li>
              <li>
                <a href="#"> <i class="fa fa-twitter"></i> </a>
              </li>
              <li>
                <a href="#"> <i class="fa fa-instagram"></i> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6 col-lg-4">
        <div class="weding_time_line text-center">
          <div class="single_time_line">
            <h3>Fast Meet</h3>
            <p>
              Many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some.
            </p>
          </div>
          <div class="single_time_line">
            <h3>He Proposed</h3>
            <p>
              Many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some.
            </p>
          </div>
          <div class="single_time_line">
            <h3>Love Story</h3>
            <p>
              Many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some.
            </p>
          </div>
          <div class="single_time_line">
            <h3>Wedding Day</h3>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4">
        <div class="single_lover_story text-center">
          <div class="story_thumb">
            <img src="~/assets/img/story/2.png" alt="" />
          </div>
          <span>Bride</span>
          <h3>Anjelina Kona</h3>
          <p>
            Many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            Content here content here, making it look like readable English.
            Many desktop publishing packages and web page editors now use.
          </p>
          <div class="social_links">
            <ul>
              <li>
                <a href="#"> <i class="fa fa-facebook"></i> </a>
              </li>
              <li>
                <a href="#"> <i class="fa fa-twitter"></i> </a>
              </li>
              <li>
                <a href="#"> <i class="fa fa-instagram"></i> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";
@import '~/assets/scss/mixins.scss';

.single_lover_story {
  margin-bottom: 30px;
  .story_thumb {
    width: 247px;
    height: 247px;
    @include border-radius(50%);
    position: relative;
    margin: auto;
    img {
      width: 100%;
    }
    &:before {
      position: absolute;
      content: "";
      left: 10px;
      top: 10px;
      bottom: 10px;
      right: 10px;
      border: 2px solid #fff;
      @include border-radius(50%);
    }
  }
  span {
    font-size: 24px;
    font-weight: 400;
    margin-top: 33px;
    display: block;
    margin-bottom: 11px;
  }
  h3 {
    font-size: 36px;
    color: #c78665;
    @media #{$mobile_device} {
      font-size: 30px;
    }
  }
  p {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 28px;
  }
  .social_links {
    text-align: center;
    ul {
      li {
        display: inline-block;
        a {
          width: 35px;
          height: 35px;
          @include border-radius(50%);
          background: #f9f3ef;
          color: #c78665;
          display: inline-block;
          text-align: center;
          line-height: 35px;
          margin: 0 3px;
          &:hover {
            background: #c78665;
            color: #fff;
          }
        }
      }
    }
  }
}
.weding_time_line {
  background: #fffaf2;
  padding: 30px;
  margin-bottom: 30px;
  .single_time_line {
    padding-bottom: 48px;
    padding-top: 45px;
    position: relative;
    &::before {
      position: absolute;
      height: 40px;
      width: 1px;
      background: #c78665;
      left: 50%;
      // @include transform(translateY(-50%));;
      content: "";
      bottom: -10px;
      opacity: 0.2;
    }
    h3 {
      font-size: 24px;
      color: #c78665;
      font-weight: 400;
    }
    p {
      font-size: 16px;
      line-height: 28px;
      font-family: $font1;
    }
    &:nth-child(4) {
      &::before {
        display: none;
      }
    }
  }
}
</style>
