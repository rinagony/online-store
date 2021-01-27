<template>
  <div id="registrate">
    <div class="container">
      <h4 class="titlesOfBlocks">Registrate account</h4>
      <form id="formItem" @submit.prevent="submitHandler">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="name"
              type="text"
              v-model.trim="name"
              :class="{ invalid: $v.name.$dirty && !$v.name.required }"
            />
            <label for="name">First Name</label>
            <small
              class="helper-text invalid"
              v-if="$v.name.$dirty && !$v.name.required"
              >Enter your first name
            </small>
          </div>
          <div class="input-field col s6">
            <input
              id="lastName"
              type="text"
              class="validate"
              v-model.trim="lastName"
              :class="{ invalid: $v.lastName.$dirty && !$v.lastName.required }"
            />
            <label for="lastName">Last Name</label>
            <small
              class="helper-text invalid"
              v-if="$v.lastName.$dirty && !$v.lastName.required"
              >Enter your last name
            </small>
          </div>
        </div>
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
        <p class="checkBox">
          <label>
            <input type="checkbox" v-model="agree" />
            <span>I agree with rules</span>
          </label>
        </p>
        <button class="waves-effect lighten btn ofertabtn" type="submit">
          Enter
        </button>
      </form>
      <div class="wrpRegister">
        <p>Do you have account already?</p>
        <router-link to="/login">SIGN IN</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Registrate",
  components: {},
  data: () => ({
    email: "",
    password: "",
    name: "",
    lastName: "",
    agree: false,
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    lastName: { required },
    agree: { checked: (v) => v },
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
        name: this.name,
        lastName: this.lastName,
      };

      try {
        await this.$store.dispatch("register", formData);
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

.row {
  margin-bottom: 0;
}

.checkBox {
  margin: 0;
}
</style>
