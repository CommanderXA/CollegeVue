<template>
    <div class="post-preview">
        <img :src="post.img" :alt="post.title">
        <div class="post-content">
            <h3 class="title">{{ post.title }}</h3>
            <p>{{ post.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.post-preview {
    max-width: 31%;
    padding: 16px;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 12px 0 rgba(0,0,0,.1);
    img {
        margin-bottom: 16px;
    }
    .post-content {
        p {
            color: #999;
        }
    }
}
</style>