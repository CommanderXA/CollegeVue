<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section class="post">
            <div class="container">

                <Post :post="post"/>
                <Comments :comments="comments"/>
                <NewComment />

            </div>
        </section>
    </div>
</template>

<script>

import Post from '@/components/Blog/Post.vue'
import NewComment from '@/components/Comments/NewComment.vue'
import Comments from '@/components/Comments/Comments.vue'

export default {
    components: {
        Post,
        NewComment,
        Comments
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
            comments: [
                { name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
                { name: 'Eliot', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
            ]
        }
    }
}
</script>

<style lang="scss">
.post {
    max-width: 900px;
    margin: 0 auto;
}
.post-header {
    text-align: center;
    margin-bottom: 30px;
    img {
        max-width: 100%;
        margin-bottom: 16px;
    }
    p {
        color: #999;
    }
}
post-body {
    text-align-last: left;
}
</style>