<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <div class="notify__wrapper">
          <div class="notify-title">
            <h1><b>Notify App</b></h1>
            <svg style="cursor: pointer;" @click="$store.dispatch('getNotifyLazy')" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-counterclockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
            </svg>
          </div>

          <div class="notify__content">
            <preloader v-show="$store.getters.getLoading"/>
            <div class="error">
              <p v-if="$store.getters.getError">{{ $store.getters.getError }}</p>
            </div>
            <notify v-show="!$store.getters.getLoading && !$store.getters.getError" :messages="$store.getters.getMessageMain"/>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
import notify from '@/components/Notify.vue'
import preloader from '@/components/UI/Preloader.vue'
import axios from 'axios'
export default {
  components: { notify, preloader },
  mounted () {
    this.$store.dispatch('getNotifyLazy', this.loading)
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.notify__wrapper {
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 12px 0 rgba(0,0,0,.1);
}
.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.notify-title {
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.error {
  color: rgb(196, 67, 67);
}
</style>
