<template>
  <div class="attending_area">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
          <div class="main_attending_area">
            <div class="flower flower_1 d-none d-lg-block">
              <img src="~/assets/img/flowers.png" alt="" />
            </div>
            <div class="flower flower_2 d-none d-lg-block">
              <img src="~/assets/img/flowers.png" alt="" />
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <div class="popup_box">
                  <div class="popup_inner">
                    <div class="form_heading text-center">
                      <h3>Möchtest du ein Spiel vorbereiten oder eine Rede halten?</h3>
                      <p>Dann wende dich bitte entweder per Mail an die Trauzeugen (<a href="mailto:trauzeugen.siewecks@gmail.com?subject=Anfrage an die Trauzeugen">trauzeugen.siewecks@gmail.com</a>) oder nutze die Form.</p>
                    </div>
                    <form
                      action="https://formspree.io/f/xpwaqopp"
                      method="POST"
                    >
                      <div class="row">
                        <input
                          type="hidden"
                          name="_subject"
                          value="Anfrage via Website"
                        />

                        <div class="col-xl-12">
                          <label for="contact-email"> Deine Email: </label>
                          <input id="contact-email" type="email" name="email" />
                        </div>

                        <div class="col-xl-12">
                          <label for="contact-message"> Deine Nachricht: </label>
                          <textarea
                            id="contact-message"
                            name="message"
                          ></textarea>
                        </div>
                        <div class="col-xl-12">
                          <button type="submit" class="boxed_btn3">Absenden</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/responsive.scss";
@import "~/assets/scss/varriable.scss";
@import '~/assets/scss/mixins.scss';

.attending_area{
    padding-top: 95px;
    padding-bottom: 280px;

    @media #{$mobile_device} {
        padding-top: 0;
        padding-bottom: 80px;
    }
    @media #{$tablet_device} {
        padding-top: 0;
        padding-bottom: 40px;
    }
    .main_attending_area{
        position: relative;
        z-index: 9;
        
        .flower img {
          width: 200px;
        }

        .flower_1{
          position: absolute;
          top: -240px;
          transform: rotate(-80deg);
          left: 150px;
        }
        .flower_2{
          position: absolute;
          right: 150px;
          bottom: -240px;
          transform: rotate(100deg);
        }
        .popup_box{
            background: #fff;
            display: inline-block;
            z-index: 9;
            padding: 51px 40px 60px 40px;
            @include box-shadow(0 10px 30px rgba(0,0,0,.05));
            @media #{$mobile_device} {
                padding: 20px;
            }
            h3{
                text-align: center;
                font-size: 36px;
                color:#C78665;
                @media #{$mobile_device} {
                    font-size: 25px;
                }
            }
            p{
                font-size: 15px;
                color: #727272;
                font-family: $font1;
                margin-bottom: 34px;
            }
            .boxed-btn3{
                width: 100%;
                text-transform: capitalize;
            }
            input{
                width: 100%;
                height: 50px;
                border: 1px solid #ddd;
                padding: 15px;
                margin-bottom: 20px;
                font-family: $font1;
                &::placeholder{
                    color: #919191;
                    font-weight: 400;
                }
                &:focus{
                    outline: none;
                }
            }
            button{
                width: 100%;
                border: none;
                font-family: $font1;
            }
            textarea{
                width: 100%;
                height: 120px;
                border: 1px solid #ddd;
                padding: 15px;
                margin-bottom: 20px;
                font-family: $font1;
                &::placeholder{
                    color: #919191;
                    font-weight: 400;
                }
                &:focus{
                    outline: none;
                }
            }
            .nice-select {
                -webkit-tap-highlight-color: transparent;
                background-color: #fff;
                /* border-radius: 5px; */
                border: solid 1px #E2E2E2;
                box-sizing: border-box;
                clear: both;
                cursor: pointer;
                display: block;
                float: left;
                font-family: $font1;
                font-weight: normal;
                width: 100% !important;
                /* height: 42px; */
                line-height: 50px;
                outline: none;
                padding-left: 18px;
                padding-right: 30px;
                position: relative;
                text-align: left !important;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                white-space: nowrap;
                width: auto;
                border-radius: 0;
                margin-bottom: 30px;
                height: 50px !important;
                font-size: 16px;
                font-weight: 400;
                color: #919191;
                &::after {
                    content: "\f0d7";
                    display: block;
                    height: 5px;
                    margin-top: -5px;
                    pointer-events: none;
                    position: absolute;
                    right: 17px;
                    top: 3px;
                    transition: all 0.15s ease-in-out;
                    width: 5px;
                    font-family: fontawesome;
                    color: #919191;
                    font-size: 15px;
                }
                &.open .list {
                    opacity: 1;
                    pointer-events: auto;
                    -webkit-transform: scale(1) translateY(0);
                    -ms-transform: scale(1) translateY(0);
                    transform: scale(1) translateY(0);
                    height: 200px;
                    overflow-y: scroll;
                }
                &.list {
                    height: 200px;
                    overflow-y: scroll;
                }
            }
        }
    }
}
</style>
