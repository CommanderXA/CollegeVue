<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="Recently Added" />
    <PostsList :posts="postsLoaded"/>
    <Contacts />
  </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  components: {
    Promo,
    Contacts
  },
  // asyncData (context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         postsLoaded: [
  //           {
  //             id: 1,
  //             title: 'Post 1',
  //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //             img: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg'
  //           }
  //     ]
  //       })
  //     }, 1500)
  //   })
  //     .then(data => {
  //       return data
  //     })
  //     .catch(e => {
  //       context.error(e)
  //     })
  // },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style>
</style>