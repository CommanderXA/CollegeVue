<template>
    <div class="wrapper">
      <div class="wrapper-content">

        <section>
          <div class="container">
            <button class="btn btnPrimary" @click="modalFirst = true">Show first modal</button>
            <!-- first Modal -->
            <modals v-show="modalFirst" title="First modal" @close="modalFirst = false">
              <template v-slot:body>
                <p>Text</p>
              </template>
            </modals>


            <button class="btn btnPrimary" @click="modalSecond.show = true">Show modal with form</button>
            <!-- second Modal -->
            <modals v-show="modalSecond.show" title="Modal with form" @close="modalSecond.show = false">
              <template v-slot:body>
                <form @submit.prevent="submitSecondForm">
                  <label>Name</label>
                  <input type="text" required v-model="modalSecond.name">
                  <label>Email</label>
                  <input type="email" required v-model="modalSecond.email">
                  <button class="btn btnPrimary">Submit</button>
                </form>
              </template>
            </modals>


            <button class="btn btnPrimary" @click="modalValidate = true">Show modal with validate form</button>
            <!-- modal with validate -->
            <modalValidate v-show="modalValidate" @close="modalValidate = false"/>
          </div>
        </section>

      </div>
    </div>
</template>

<script>
import modals from '@/components/UI/Modal.vue'
import modalValidate from '@/components/ModalValidate.vue'
export default {
  name: 'App',
  components: {
    modals,
    modalValidate
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
    }
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ""
      this.modalSecond.email = ""
      this.modalSecond.show = false
    }
  }
}
</script>

<style lang="scss">
</style>