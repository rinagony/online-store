<template>
  <div id="login">
    <div class="container">
      <h4 class="titlesOfBlocks">Log into your account</h4>
      <form id="formItem" @submit.prevent="submitHandler">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              v-model.trim="email"
              :class="{
                invalid:
                  ($v.email.$dirty && !$v.email.required) ||
                  ($v.email.$dirty && !$v.email.email),
              }"
            />
            <label for="email">Email</label>
            <small
              class="helper-text invalid"
              v-if="$v.email.$dirty && !$v.email.required"
              >Email field must not be empty
            </small>
            <small
              class="helper-text invalid"
              v-else-if="$v.email.$dirty && !$v.email.email"
              >Enter correct email
            </small>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              v-model.trim="password"
              :class="{
                invalid:
                  ($v.password.$dirty && !$v.password.required) ||
                  ($v.password.$dirty && !$v.password.minLength),
              }"
            />
            <label for="password">Password</label>
            <small
              class="helper-text invalid"
              v-if="$v.password.$dirty && !$v.password.required"
              >Enter password
            </small>
            <small
              class="helper-text invalid"
              v-else-if="$v.password.$dirty && !$v.password.minLength"
              >Password should be
              {{ $v.password.$params.minLength.min }} symbol. Now
              {{ password.length }}
            </small>
          </div>
        </div>
        <button class="waves-effect lighten btn ofertabtn" type="submit">
          Enter
        </button>
      </form>
      <div class="wrpRegister">
        <p>Don't you have own account?</p>
        <router-link to="/registrate">REGISTRATE</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import messages from "@/utils/messages";

export default {
  name: "Login",
  components: {},
  data: () => ({
    email: "",
    password: "",
  }),
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped lang="scss">
#formItem {
  max-width: 600px;
  margin: 0 auto;
}

h4 {
  margin-bottom: 2rem;
}

.wrpRegister {
  margin-top: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  a {
    color: green;
    font-weight: 600;
    border: 2px solid green;
    border-radius: 4px;
    padding: 4px;
    margin-left: 1rem;
  }
  p {
    font-weight: 600;
  }
}
</style>
