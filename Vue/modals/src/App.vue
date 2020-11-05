<template>
  <div class="wrapper">

    <div class="wrapper-content">
      
      <section>
        <div class="container">

          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show The First Modal</button>
          <modals
          title="The First Modal"
          v-show="modalFirst"
          @close="modalFirst = false">

            <template v-slot:body>
              <p>Text</p>
            </template>

          </modals>

          <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show The Second Modal</button>
          <modals
          title="The Second Modal"
          v-show="modalSecond.show"
          @close="modalSecond.show = false">

            <template v-slot:body>
              <form @submit.prevent="submitSecondForm">
                <label>Name</label>
                <input type="text" :required="modalSecond.show" v-model="modalSecond.name">
                <label>Email</label>
                <input type="text" :required="modalSecond.show" v-model="modalSecond.email">
                <button class="btn btnPrimary">Submit</button>
              </form>
            </template>

          </modals>

        </div>
      </section>

    </div>

  </div>
</template>

<script>
import modals from "@/components/Modal.vue"
export default {
  components: {
    modals
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: '',
      }
    }
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>

<style>
</style>
