<template>
  <div>
    <modals title="The Register Modal" @close=onclose>

            <div slot="body">
              <form @submit.prevent="onSubmit">
                <div class="form-item" :class="{ errorInput: $v.name.$error }">
                  <label>Name</label>
                  <p class="errorText" v-if="!$v.name.required">This Filed is required</p>
                  <p class="errorText" v-if="!$v.name.minLength">Your name must contain at least {{ $v.name.$params.minLength.min }} letters</p>
                  <input v-model="name" 
                  :class="{ error: $v.name.$error }"
                  @change="$v.name.$touch()">
                </div>

                <div class="form-item" :class="{ errorInput: $v.email.$error }">
                  <label>Email</label>
                  <p class="errorText" v-if="!$v.email.required">This Filed is required</p>
                  <p class="errorText" v-if="!$v.email.email">Email isn't valid</p>
                  <input v-model="email" 
                  :class="{ error: $v.email.$error }"
                  @change="$v.email.$touch()">
                </div>

                <div class="form-item" :class="{ errorInput: $v.password.$error }">
                  <label>Password</label>
                  <p class="errorText" v-if="!$v.password.required">This Filed is required</p>
                  <p class="errorText" v-if="!$v.password.minLength">Password contain at least 6 symbols</p>
                  <input v-model="password" 
                  :class="{ error: $v.password.$error }"
                  @change="$v.password.$touch()">
                </div>

                <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
                  <label>Repeat Password</label>
                  <p class="errorText" v-if="!$v.repeatPassword.required">This Filed is required</p>
                  <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must match</p>
                  <input v-model="repeatPassword" 
                  :class="{ error: $v.repeatPassword.$error }"
                  @change="$v.repeatPassword.$touch()">
                </div>

                <button class="btn btnPrimary">Submit</button>
                <br>
                <br>
                <a @click.prevent="$emit('on-redirect')" class="link">Already have an account?</a>
              </form>
            </div>

    </modals>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import modals from "@/components/UI/Modal.vue"
export default {
  components: {
    modals
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          sameAsPassword: this.sameAsPassword,
        }
        console.log(user);
        // DONE
        this.name = ''
        this.email = ''
        this.password = ''
        this.repeatPassword = ''
        this.$v.$reset()
        this.$emit('close')
      }
    },
    onclose() {
      this.name = ''
      this.email = ''
      this.password = ''
      this.repeatPassword = ''
      this.$v.$reset()
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}
.form-item {
  &.errorInput .errorText {
  display: block;
  }
}
.form-item .error {
  border-color: #de4040;
}
</style>