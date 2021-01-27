<template>
  <div id="formBlock">
    <div class="container">
      <div class="formWrp">
        <form @submit.prevent="submitHandler">
          <div class="row">
            <div class="input-field col s6">
              <input required id="first_name" type="text" class="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input required id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="input-field">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Your message</label>
          </div>
          <button class="ofertabtn waves-effect lighten btn auth-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    submitHandler() {
      window.M.toast({ html: "You send" });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";

input {
  &:active {
    border-bottom-color: #ffd180;
  }
}

.formWrp {
  margin-top: 2rem;
  @include for-desktop-up {
    padding: 0 5rem;
  }
}

.lighten {
  background-color: #dfe1e6;
  padding: 0 5rem;
  margin-top: 1rem;
  color: black;
}
</style>
