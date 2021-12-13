<template>
  <div>
      
      <v-container>
          <v-card>
              <v-card elevation="0" class="px-3 mb-12">
                <v-row class="d-flex justify-space-around">
                
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
            </v-card>
              <v-container>
                <v-subheader>
                    회원가입
                </v-subheader>
                <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm"> 
                    <v-text-field
                        v-model="email"
                        label="이메일"
                        type="email"
                        :rules="emailRules"
                        required
                    />
                    <v-text-field
                        v-model="password"
                        label="비밀번호"
                        type="password"
                        :rules="passwordRules"
                        required
                    />
                    <v-text-field
                        v-model="passwordCheck"

                        label="비밀번호확인"
                        type="password"
                        :rules="passwordCheckRules"
                        required
                    />
                    <v-text-field
                        v-model="nickname"
                        label="닉네임"
                        type="nickname"
                        :rules="nicknameRules"
                        required
                    />
                    
                    
                    <v-checkbox
                        v-model="terms"
                        required
                        :rules="[v => !!v || '약관에 동의해야합니다.']" 
                        label="약관에 동의합니다."
                    />  
                    <v-btn type="submit">가입하기</v-btn>
                </v-form>
              </v-container>
          </v-card>
      </v-container>
  </div>  
</template>

<script>
export default {
    data() {
        return {
            valid:false,
            email:'',
            password:'',
            passwordCheck:'',
            nickname:'',
            conname:'',
            sigongname:'',
            terms:false,
            emailRules: [  
                v => !!v || '이메일은 필수입니다.',
            ],
            nicknameRules: [
                v=> !!v || '닉네임은 필수입니다.',
            ],
            passwordRules: [
                v=> !!v || '비밀번호는 필수입니다.',
            ],
            passwordCheckRules: [
                v=> !!v || '비밀번호 확인은 필수입니다.',
                //v => v === this.password || '비밀번호가 일치하지 않습니다.',
            ],
        }
    },
    computed:{
        me(){
            return this.$store.state.users.me;
        }
    },
    watch:{
        me(value, oldValue){
            if(value){
                this.$router.push({
                    path: '/',
                });
            }
        }
    },
    methods:{
        onSubmitForm(){
            if (this.$refs.form.validate()){
                this.$store.dispatch('users/signUp',{
                    nickname:this.nickname,
                    email:this.email,
                    password:this.password,
                })
                    .then(()=>{
                        this.$router.push({
                            path: '/',
                        });

                    })
                    .catch(()=>{
                        alert('회원가입실패');
                    });
                
            }else{
                alert('폼이 유효하지 않습니다.');
            }

        }
    },
    head(){
        return {
            title: '회원가입'
        }
    },
    
    middleware: 'anonymous',

}
</script>

<style>

</style>