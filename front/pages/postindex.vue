<template>
  <v-container>
      <LoginForm />
      <PostForm v-if="me"/>
      <v-img src="https://lh3.googleusercontent.com/agGaJGEWmuYvp37e…zB7bg4RDS6QOjiOQwNRGNRgu9A2HoqTU3eV-ehTo_k5g=h200"/>  
      <div>
          
          <PostCard v-for="p in mainPosts" :key="p.id" :post="p" />
          
      </div>
        <v-row class="d-flex justify-space-between">
            
            <v-card nuxt to="signup" elevation="0" class="pa-2 d-flex justify-center align-center" width="52" height="52" :style="{backgroundColor:'green',borderRadius:'50%'}">
                
                    <v-img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/naver_logo.png" width="32" height="32" />
               
            </v-card>
            <v-card elevation="0" class="pa-2 d-flex justify-center align-center" width="52" height="52" :style="{backgroundColor:'yellow',borderRadius:'50%'}">
                
                    <v-img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/kakao_logo.png" width="32" height="32" />
                
            </v-card>
            <v-card elevation="0" class="pa-2 d-flex justify-center align-center" width="52" height="52" :style="{backgroundColor:'blue',borderRadius:'50%'}">
               
                    <v-img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/facebook_logo_white.png" width="32" height="32" />
               
            </v-card>
            <v-card elevation="0" class="pa-2 d-flex justify-center align-center" width="52" height="52" :style="{backgroundColor:'white',borderRadius:'50%'}">
                
                    <v-img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/google_logo.png" width="32" height="32" />
                
            </v-card>
        </v-row>
  </v-container>  
</template>

<script>
import PostCard from '~/components/PostCard';
import PostForm from '~/components/PostForm';
import LoginForm from '~/components/LoginForm';
export default {
    components: {
        PostCard,
        PostForm,
        LoginForm,
    },
    
    data() {
        return {
            name: 'Nuxt.js',
        };
    },
    computed:{
        me(){
            return this.$store.state.users.me;
        },
        mainPosts(){
            return this.$store.state.posts.mainPosts;
        },
        hasMorePost(){
            return this.$store.state.posts.hasMorePost;
        }
    },
    
    fetch({store}){  //fetch는 보통 store 넣을때 많이 쓴다.
        return store.dispatch('posts/loadPosts', { reset: true});
    },
    
    mounted(){
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
        
    },
    methods:{
        onScroll(){
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
                if(this.hasMorePost){
                    this.$store.dispatch('posts/loadPosts');
                }
            }
        },
    },
    head(){
        return {
            title: '메인페이지'
        }
    },

};
</script>

<style>

</style>