<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section class="post">
            <div class="container">

                <Post :post="post"/>
                <Comments :comments="comments"/>
                <NewComment :postId="$route.params.id"/>

            </div>
        </section>
    </div>
</template>

<script>

import Post from '@/components/Blog/Post.vue'
import NewComment from '@/components/Comments/NewComment.vue'
import Comments from '@/components/Comments/Comments.vue'

import axios from 'axios'

export default {
    components: {
        Post,
        NewComment,
        Comments
    },
    async asyncData (context) {
        let [post, comments] = await Promise.all([
            axios.get(`https://blog-nuxt-41869.firebaseio.com/posts/${context.params.id}.json`),
            axios.get(`https://blog-nuxt-41869.firebaseio.com/comments.json`)
        ])

        // let commentsArray = [],
        //     commentsArrayRes = []

        // Object.keys(comments.data).forEach(key => {
        //     commentsArray.push(comment.data[key])
        // })

        // for (let i = 0; i < commentsArray; i++) {
        //     if (commentsArray[i].postId === context.params.id && commentsArray[i].published === true) {
        //         commentsArrayRes.push(commentsArray[i])
        //     }
        // }

        let commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postId === context.params.id && comment.published === true))
        return {
            post: post.data,
            comments: commentsArrayRes
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