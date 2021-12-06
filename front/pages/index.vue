<template>
    <v-container class="ma-0 pa-0" fluid>
    
        <v-carousel
        :show-arrows="false"
        height="130"
        hide-delimiter-background
        delimiter-icon="mdi-circle-medium"
        >
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            
            ></v-carousel-item>
        </v-carousel>

        <v-row no-gutters class="mt-3">
            <v-col>
                <v-card
                class="pa-3 d-flex align-center flex-column"
                elevation="0"
                >
                    
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    
                    max-width="58"
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/categories/3.png"
                    ></v-img>
                    
                    <div><span :style="{fontSize:'11px'}">폰트</span></div>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                class="pa-3 d-flex align-center flex-column"
                elevation="0"
                >
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    
                    max-width="58"
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/categories/1.png"
                    ></v-img>
                    <div><span :style="{fontSize:'11px'}">제품</span></div>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                class="pa-3 d-flex align-center flex-column"
                elevation="0"
                >
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    
                    max-width="58"
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/categories/6.png"
                    ></v-img>
                    <div><span :style="{fontSize:'11px'}">웹디자인</span></div>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                class="pa-3 d-flex align-center flex-column"
                elevation="0"
                >
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    
                    max-width="58"
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/categories/7.png"
                    ></v-img>
                    <div><span :style="{fontSize:'11px'}">썸네일</span></div>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                class="pa-3 d-flex align-center flex-column"
                elevation="0"
                >
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    
                    max-width="58"
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/categories/11.png"
                    ></v-img>
                    <div><span :style="{fontSize:'11px'}">패키지</span></div>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                class="pa-3 d-flex align-center flex-column"
                elevation="0"
                >
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    
                    max-width="58"
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/categories/2.png"
                    ></v-img>
                    <div><span :style="{fontSize:'11px'}">인포그래픽</span></div>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                class="pa-3 d-flex align-center flex-column"
                elevation="0"
                >
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    
                    max-width="58"
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/categories/10.png"
                    ></v-img>
                    <div><span :style="{fontSize:'11px'}">포토샵</span></div>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                class="pa-3 d-flex align-center flex-column"
                elevation="0"
                >
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    
                    max-width="58"
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/categories/12.png"
                    ></v-img>
                    <div><span :style="{fontSize:'11px'}">기타</span></div>
                </v-card>
            </v-col>
        </v-row>

        <div>
            <v-row>
                <v-col>
                    <div class="mt-3"><h3>내가 찜한 서비스</h3></div>
                </v-col>
                <v-col>
                    <div class="text-right mt-3">
                        <h5 class="mt-2">
                            <a href="#">모두보기 ></a>
                        </h5>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-slide-group
                    v-model="model"
                    class="pa-0 ma-0"
                    center-active
                    show-arrows
                    >
                    <v-slide-item
                        v-for="(item, i) in item2s"
                        :key="i"
                        v-slot="{ toggle }"
                        show-arrows="false"
                    >   
                        <v-card
                        color="white"
                        class="mt-n3"
                        height="175"
                        width="145"
                        elevation="0"
                        @click="toggle"
                        
                        nuxt to="/detailpage"
                        >
                        
                            <v-list-item dense class="px-1 my-0" two-line>
                                <v-list-item-content>
                                    <v-avatar
                                    class="ma-0 pa-0"
                                    size="108"
                                    tile
                                    >
                                        <v-img
                                        :src="item.src"
                                        max-width="145"
                                        contain
                                        ></v-img>
                                    </v-avatar>
                                    <v-list-item-subtitle dense v-text="item.title" class="pa-1 mb-n1">
                                    
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle class="pt-1">
                                    <span style="fontWeight:900">11,000 원</span>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-slide-item>
                    </v-slide-group>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-row>
                <v-col>
                    <div class="mt-3"><h3>추천 서비스</h3></div>
                </v-col>
                
            </v-row>
            <v-row>
                <v-col
                v-for="(item, i) in item2s"
                :key="i"
                cols="12"
                >
                <v-card
                    :color="item.color"
                    max-height="98"
                    class="pa-0 ma-0"
                    elevation="0"
                    nuxt to="/detailpage"
                >
                    <div class="d-flex flex-no-wrap">

                    <v-avatar
                        class="ma-0"
                        size="98"
                        tile
                    >
                        <v-img
                        :src="item.src"
                        max-height="98"
                        ></v-img>
                    </v-avatar>
                    <div class="pl-3">
                        <v-card-subtitle
                        
                        v-text="item.title"
                        ></v-card-subtitle>

                        <v-row
                        align="center"
                        class="ml-n1 mt-2"
                        >
                            <v-rating
                            :value="4.5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="16"
                            ></v-rating>

                            <div class="pt-1 grey--text ms-1">
                            4.5 (413)
                            </div>
                        </v-row>

                        <v-card-actions>
                        

                        <v-btn
                            
                            class="white ml-n2 mt-0 pa-0 pb-2"
                            elevation="0"
                            
                            
                        >
                        <span style="fontWeight:900">11,000 원</span>
                        </v-btn>
                        </v-card-actions>
                    </div>

                    
                    </div>
                </v-card>
                </v-col>
            </v-row>
            <v-row class="mt-5 mb-5">
                
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    contain
                    position="center center"
                    max-height="84"
                    src="https://kmong.com/img/main/mobile/img_event_banner@2x.png"
                    ></v-img>
                
            </v-row>
            <v-row>
                <v-container fluid>
                    <v-row>
                        <v-col class="border-top-solid border-bottom-solid">
                            <div
                            class="d-flex justify-space-between"
                            max-width="100%"
                            >
                                <h5 class="inline-block"><a href="#">인재영입</a></h5>
                                <h5 class="inline-block"><a href="#">서비스 소개</a></h5>
                                <h5 class="inline-block"><a href="#">FAQ</a></h5>
                                <h5 class="inline-block"><a href="#">고객센터</a></h5>
                                
                                

                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center">
                            <h6>
                                (주)컴포디는 통신판매중개자이며, 통신판매의 당사자가 아닙니다.<br>
                                상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
                 
                            </h6>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex justify-center text-center">
                            <h5>
                                (주)컴포디 사업자정보
                            </h5>
                            <v-avatar
                                class="ma-0 mt-1"
                                size="10"
                                tile
                            >
                                <v-img
                                src="https://kmong.com/img/seller/become_seller/ic_become_seller_faq.png"
                                max-height="10"
                                ></v-img>
                            </v-avatar>	
                            
                        </v-col>
                    </v-row>
                    <v-row></v-row>
                    <v-row class="pa-0">
                        <v-col class="pa-0">
                            <v-col class="text-center" style="fontSize:13px">
                                <a href="#">사업자정보 확인</a>
                                <span>|</span>
                                <a href="#">이용약관</a>
                                <span>|</span>
                                <a href="#">개인정보처리방침</a>

                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row class="mb-0 text-center">
                        <v-col cols="6">
                            <a href="https://play.google.com/store/apps/details?id=com.kmong.kmong">
                                <v-img
                                src="https://kmong.com/img/kmong_is/img_google_play.png"
                                contain
                                max-height="44"
                                ></v-img>
                            </a>
                        </v-col>
                        <v-col cols="6">
                            <a href="http://itunes.apple.com/kr/app//id1039179300?mt=8">
                                <v-img
                                src="https://kmong.com/img/kmong_is/img_app_store.png"
                                contain
                                max-height="44"
                                ></v-img>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row class="mb-11 text-center">
                        <v-col class="text-center">
                            <h5>© 2021 컴포디 Inc. All rights reserved.</h5>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </div>
        
        


        
    </v-container>      
</template>

<script>
export default {
    computed:{
        height (){
            switch (this.$vuetify.breakpoint.name){
                case 'xs' : return 100
                case 'md' : return 500
                default : return 300
            }
        },
        
    },
    data () {
      return {
        items: [
          {
            src: 'https://d2v80xjmx68n4w.cloudfront.net/assets/images/curated_contents/Au8Dj_curated_content_item_main_mobile_654.jpg',
          },
          {
            src: 'https://d2v80xjmx68n4w.cloudfront.net/assets/images/curated_contents/YFwsc_curated_content_item_main_mobile_655.png',
          },
          {
            src: 'https://d2v80xjmx68n4w.cloudfront.net/assets/images/curated_contents/Au8Dj_curated_content_item_main_mobile_654.jpg',
          },
          {
            src: 'https://d2v80xjmx68n4w.cloudfront.net/assets/images/curated_contents/YFwsc_curated_content_item_main_mobile_655.png',
          },
        ],
        item2s: [
        {
          color: '#ffffff',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/QbVBu1625654810.jpg',
          title: '미술,디자인,작가가 모여 감각적인 로고 제작해 드립니다.',
          artist: 'Foster the People',
        },
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/D6OhI1637212595.jpg',
          title: '8년연속 만족 1위 수상" 디자인 1위의 신뢰를 보여 드립니다.',
          artist: 'Foster the People',
        },
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/gStnB1633435839.jpg',
          title: '공모전 488회" 우승 명함 디자인 이벤트 드립니다.',
          artist: 'Foster the People',
        },
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/T155E1634276078.jpg',
          title: '로고 제작 3,000건, 로고 디자인 드립니다.',
          artist: 'Foster the People',
        },
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/sEfSY1634543284.jpg',
          title: '"카카오, SK 출신 디자인 팀" 압도적인 만족도 감사 드립니다.',
          artist: 'Foster the People',
        },
        
        {
          color: 'gray',
          src: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/ympAE1635611268.jpg',
          title: '아모레퍼시픽 CJ출신이 화장품 제품 패키지 디자인 해 드립니다.',
          artist: 'Foster the People',
        },
      ],
      }
    },
}
</script>

<style>
a {
    text-decoration: none !important;
    color:black !important;
}
.border-top-solid {
    border-top : solid #e6e6e6 1px !important;
}
.border-bottom-solid {
    border-bottom : solid #e6e6e6 1px !important;
}
* {
        font-family: 'Exocet';
    }
</style>