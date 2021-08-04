<template>
  <div class="home">
    <blog-post :post="welcomeScreen" />
    <blog-post v-for="(post, index) in sampleBlogPost" :key="index" :post="post" />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";

export default {
  name: "Home",
  components: {
    BlogPost
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
            "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: 'This is a Filter Title!',
          blogHTML: 'This is a filter blog post title!',
          blogCoverPhoto: 'beatiful-stories',
        },
        {
          title: 'This is a Filter Title!',
          blogHTML: 'This is a filter blog post title!',
          blogCoverPhoto: 'designed-for-everyone',
        }
      ]
    }
  }
};
</script>
