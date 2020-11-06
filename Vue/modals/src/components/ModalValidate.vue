<template>
    <modal
        title="The Validate Modal"
        @close="$emit('close')">

            <template v-slot:body>
              <form @submit.prevent="">
                <label>Name</label>
                <input type="text" :required="modalValidate">
                <label>Email</label>
                <input type="text" :required="modalValidate">
                <button class="btn btnPrimary">Submit</button>
              </form>
            </template>

    </modal>
</template>

<script>
import modal from "@/components/UI/Modal.vue"
export default {
  components: {
    modal
  }
}
</script>