<template>
  <BaseBoxSection>
    <template #title
      >Möchtest du ein Spiel vorbereiten oder eine Rede halten?</template
    >
    <template #sub-title
      >Dann wende dich bitte entweder per Mail an die Trauzeugen (<a
        href="mailto:trauzeugen.siewecks@gmail.com?subject=Anfrage an die Trauzeugen"
        >trauzeugen.siewecks@gmail.com</a
      >) oder nutze die Form.</template
    >
    <form action="https://formspree.io/f/xpwaqopp" method="POST">
      <div class="row">
        <input type="hidden" name="_subject" value="Anfrage via Website" />

        <div class="col-xl-12">
          <label for="contact-email"> Deine Email: </label>
          <input id="contact-email" type="email" name="email" autocomplete="on"/>
        </div>

        <div class="col-xl-12">
          <label for="contact-message"> Deine Nachricht: </label>
          <textarea id="contact-message" name="message"></textarea>
        </div>
        <div class="col-xl-12">
          <button type="submit">Absenden</button>
        </div>
      </div>
    </form>
  </BaseBoxSection>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/varriable.scss";
@import "~/assets/scss/mixins.scss";
@import "~/assets/scss/responsive.scss";

button {
  width: 100%;
  text-transform: capitalize;
  cursor: pointer;
  background: var(--theme-color);
  padding: 9px 26px;
  margin-bottom: 0;
  font-size: 20px;
  color: #fff;
  @include transition(0.5s);
  display: inline-block;
  &:hover {
    background: #faf0f0;
    color: var(--theme-color);
  }
  @media #{$tablet_device} {
    padding: 9px 16px;
  }
}
input {
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  font-family: $font1;
  &::placeholder {
    color: #919191;
    font-weight: 400;
  }
  &:focus {
    outline: none;
  }
}
button {
  width: 100%;
  border: none;
  font-family: $font1;
}
textarea {
  width: 100%;
  height: 120px;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  font-family: $font1;
  &::placeholder {
    color: #919191;
    font-weight: 400;
  }
  &:focus {
    outline: none;
  }
}
</style>
