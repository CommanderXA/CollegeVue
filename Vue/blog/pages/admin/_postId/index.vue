<template>
    <NewPostForm
        :postEdit="post"
        @submit="onSubmit"/>
</template>

<script>

import NewPostForm from "@/components/Admin/NewPostForm.vue"

export default {
    components: {
        NewPostForm
    },
    data () {
        return {
            post: {
                id: 1,
                title: 'Post 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                img: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg'
            },
        }
    },
    layout: 'admin',
    methods: {
        onSubmit (post) {
            console.log('post edited');
            console.log(post);
        }
    }
    
}
</script>