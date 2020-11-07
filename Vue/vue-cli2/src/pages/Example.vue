<template>
    <div class="wrapper-content wrapper-content--fixed">
      
      <section>
        <div class="container">
          <h1>Example Page</h1>
          <input v-model="message" type="text">
          <button class="btn" @click="setMessage">Change the message</button>
          <p>{{ getMessage }}</p>
        </div>
      </section>

    </div>
</template>

<script>
export default {
    data () {
        return {
            message: null,
        }
    },
    computed: {
        getMessage () {
            return this.$store.getters.getMessage
        }   
    },
    methods: {
        setMessage () {
            this.$store.dispatch('setMessage', this.message)
        }
    }
}
</script>