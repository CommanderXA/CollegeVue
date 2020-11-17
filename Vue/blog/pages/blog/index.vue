<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Posts" />
    <PostsList :posts="posts"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {
          id: 1,
          title: 'Post 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg'
        },
        {
          id: 2,
          title: 'Post 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://cdn.pixabay.com/photo/2017/10/28/14/56/dolomites-2897227_1280.jpg'
        },
        {
          id: 3,
          title: 'Post 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://cdn.pixabay.com/photo/2014/08/23/10/54/mountain-425134_1280.jpg'
        },
      ]
    }
  }
}
</script>

<style>
</style>