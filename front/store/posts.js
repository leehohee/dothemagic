import Vue from 'vue';
import throttle from 'lodash.throttle';

export const state = () => ({
    mainPosts:[],
    main2Posts:[],
    main3Posts:[],
    hasMorePost: true,
    imagePaths:[],
    
});

const limit = 10;
const totalPosts = 51;

export const mutations = {
    addMainPost(state, payload) {
        state.mainPosts.unshift(payload);
        state.imagePaths = [];
    },
    add2MainPost(state, payload) {
        console.log(payload);
        state.main2Posts.unshift(payload);
        state.imagePaths = [];
    },
    addAuctionPost(state, payload) {
        state.mainPosts.unshift(payload);
        state.imagePaths = [];
    },
    selecthouse(state, payload) {
        state.main3Posts.unshift(payload);
        //state.imagePaths = [];
    },
    removeMainPost(state, payload){
        const index = state.mainPosts.findIndex(v => v.id === payload.postId);
        state.mainPosts.splice(index, 1);
    },
    loadComments(state,payload){
        const index = state.mainPosts.findIndex(v => v.id === payload.postId);
        Vue.set(state.mainPosts[index],'Comments', payload.data);
    },
    addComment(state, payload){
        const index = state.mainPosts.findIndex(v => v.id === payload.PostId);
        state.mainPosts[index].Comments.unshift(payload);
    },
    loadPost(state, payload) {
        state.mainPosts = [payload];
        console.log(state.mainPosts[0]);
    },
    loadPosts(state, payload){
        if (payload.reset) {
            state.mainPosts = payload.data;
        } else {
            state.mainPosts = state.mainPosts.concat(payload.data);
        }
        
        state.hasMorePost = payload.length === 10;
    },
    load3Posts(state, payload){
        if (payload.reset) {
            state.main3Posts = payload.data;
        } else {
            state.main3Posts = state.main3Posts.concat(payload.data);
        }
        
        //state.hasMorePost = payload.length === 10;
    },
    concatImagePaths(state,payload){
        state.imagePaths = state.imagePaths.concat(payload); //추가로 이미지 업로드하는 경우를 대비
    },
    removeImagePath(state, payload){
        state.imagePaths.splice(payload, 1);
    },
    unlikePost( state, payload){
        const index = state.mainPosts.findIndex(v => v.id === payload.postId);
        const userIndex = state.mainPosts[index].Likers.findIndex(v => v.id === payload.userId);
        state.mainPosts[index].Likers.splice(userIndex, 1);
    },
    likePost(state, payload){
        const index = state.mainPosts.findIndex(v => v.id === payload.postId);
        state.mainPosts[index].Likers.push({
            id : payload.userId,
        });
    },
};

export const actions = {
    add({ commit, state }, payload){
        //서버에 게시글 등록 요청 보냄
        this.$axios.post('/post',{
            content: payload.content,
            image: state.imagePaths,
        },{
            withCredentials: true,
        })
            .then((res)=>{
                commit('addMainPost', res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        
    },
    add2({ commit, state }, payload){
        //서버에 게시글 등록 요청 보냄
        this.$axios.post('/post/house',{
            content: payload.content,
            tree:payload.tree,
            py:payload.py,
            solo:payload.solo,
            image: state.imagePaths,
        },{
            withCredentials: true,
        })
            .then((res)=>{
                commit('add2MainPost', res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        
    },
    selecthouse({ commit, state }, payload){
        //서버에 게시글 등록 요청 보냄
        this.$axios.post('/post/selecthouse',{
            
            tree:payload.tree,
            py:payload.py,
            solo:payload.solo,
            
        },{
            withCredentials: true,
        })
            .then((res)=>{
                commit('selecthouse', res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        
    },
    selectImage({ commit, state }, payload){
        //서버에 게시글 등록 요청 보냄
        this.$axios.post('/post/selectimage',{
            id:payload.id,
            
            
        },{
            withCredentials: true,
        })
            .then((res)=>{
                commit('addAuctionPost', res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        
    },
    remove({ commit }, payload){
        this.$axios.delete(`/post/${payload.postId}`,{
            withCredentials: true,
        })
        .then(()=>{
            commit('removeMainPost', payload)
        })
        .catch((err)=>{
            console.error(err);
        });
    },
    addComment({commit}, payload){
        this.$axios.post(`/post/${payload.postId}/comment`, {
            content: payload.content,
        }, {
            withCredentials: true,
        }).then((res)=>{
            commit('addComment', res.data);
        })
        .catch((err)=>{
            console.error(err);
        });
    },
    loadComments({commit}, payload){
        this.$axios.get(`/post/${payload.postId}/comments`)
            .then((res)=>{
                commit('loadComments', {
                    postId: payload.postId,
                    data: res.data,
                });
            })
            .catch((err)=>{
                console.error(err);
            });
    },
    async loadPost({ commit, state }, payload) {
        try {
            const res = await this.$axios.get(`/post/${payload}`);
            commit('loadPost', res.data);
        } catch (err) {
            console.error(err);
        }
    },
    loadPosts : throttle(async function({ commit, state },payload){
        console.log('loadPosts');
        try {
        if (payload && payload.reset) {
            const res = await this.$axios.get(`/posts?limit=10`);
            commit('loadPosts', {
            data: res.data,
            reset: true,
            });
            return;
        }
        if (state.hasMorePost) {
            const lastPost = state.mainPosts[state.mainPosts.length - 1];
            const res = await this.$axios.get(`/posts?lastId=${lastPost && lastPost.id}&limit=10`);
            commit('loadPosts', {
            data: res.data,
            });
            return;
        }
        } catch (err) {
        console.error(err);
        }
    }, 2000),
    load3Posts : throttle(async function({ commit, state },payload){
        console.log('load3Posts');
        try {
        
            const res = await this.$axios.get(`/posts/images?limit=10`);
            commit('load3Posts', {
            data: res.data,
            reset: true,
            });
            return;
        
        
        } catch (err) {
            console.error(err);
        }
    }, 2000),
    loadUserPosts : throttle(async function({ commit, state },payload){
        if (payload && payload.reset) {
            const res = await this.$axios.get(`/user/${payload.userId}/posts?limit=10`);
            commit('loadPosts', {
              data: res.data,
              reset: true,
            });
            return;
        }
        if(state.hasMorePost){
            try {
            const lastPost = state.mainPosts[state.mainPosts.length - 1];
            const res = this.$axios.get(`user/${payload.userId}/posts?lasId=${lastPost && lastPost.id}&limit=10`);
            commit('loadPosts', {
                data: res.data,
            });
            return ;
            } catch(err){
                console.error(err);
            }
        }
    }, 2000),
    loadHashtagPosts: throttle(async function({ commit, state }, payload) {
        try {
            if (payload && payload.reset) {
            const res = await this.$axios.get(`/hashtag/${payload.hashtag}?limit=10`);
            commit('loadPosts', {
                data: res.data,
                reset: true,
            });
            return;
            }
            if (state.hasMorePost) {
            const lastPost = state.mainPosts[state.mainPosts.length - 1];
            const res = await this.$axios.get(`/hashtag/${payload.hashtag}?lastId=${lastPost && lastPost.id}&limit=10`);
            commit('loadPosts', {
                data: res.data,
            });
            return;
            }
        } catch (err) {
            
        }
    }, 2000),
    uploadImages({commit}, payload){
        this.$axios.post('/post/images', payload,{
            withCredentials: true,
        })
            .then((res)=>{
                commit('concatImagePaths', res.data);
            })
            .catch((err)=>{
                console.error(err);
            });
    },
    retweet({commit}, payload){
        this.$axios.post(`/post/${payload.postId}/retweet`, {}, {
            withCredentials:true,
        })
        .then((res)=>{
            commit('addMainPost', res.data);
        })
        .catch((err)=>{
            console.error(err);
            alert(err.response.data);
        });
    },
    likePost({commit},payload){
        this.$axios.post(`/post/${payload.postId}/like`, {}, {
            withCredentials:true,
        })
        .then((res)=>{
            commit('likePost', {
                userId: res.data.userId,
                postId: payload.postId,
            });
        })
        .catch((err)=>{
            console.error(err);
        });
    },
    unlikePost({commit},payload){
        this.$axios.delete(`/post/${payload.postId}/like`, {  //delete할때는 두번째가 지워줘야함 데이터가 없음
            withCredentials:true,
        })
        .then((res)=>{
            commit('unlikePost', {
                userId: res.data.userId,
                postId: payload.postId,
            });
        })
        .catch((err)=>{
            console.error(err);
        });
    },
};