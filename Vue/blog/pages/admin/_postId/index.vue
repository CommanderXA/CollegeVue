<template>
    <NewPostForm
        :postEdit="post"
        @submit="onSubmit"/>
</template>

<script>

import axios from 'axios'
import NewPostForm from "@/components/Admin/NewPostForm.vue"

export default {
    components: {
        NewPostForm
    },
    layout: 'admin',
    asyncData (context) {
        return axios.get(`https://blog-nuxt-41869.firebaseio.com/posts/${context.params.postId}.json`)
            .then(res => {
                return {
                    post: { ...res.data, id: context.params.postId }
                }
            })
            .catch(e => context.error(e))
    },
    methods: {
        onSubmit (post) {
            console.log('post edited');
            this.$store.dispatch('editPost', post)
                .then(() => {
                    this.$router.push('/admin')
                })
        }
    }
    
}
</script>