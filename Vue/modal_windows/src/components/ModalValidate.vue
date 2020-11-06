<template>
  <div>
    <modals title="The Validate Modal" @close="$emit('close')">

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
                <button class="btn btnPrimary">Submit</button>
              </form>
            </div>

    </modals>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import modals from "@/components/UI/Modal.vue"
export default {
  components: {
    modals
  },
  data() {
    return {
      name: '',
      email: ''
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
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        }
        console.log(user);
        // DONE
        this.name = ''
        this.email = ''
        this.$v.$reset()
        this.$emit('close')
      }
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
input .error {
  border-color: #de4040;
}
</style>