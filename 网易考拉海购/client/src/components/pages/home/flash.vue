<template>
    <div>
        <div class="top">
            <div class="flash">
                <span>限时抢</span>
                <figure>9点场</figure>  
                <div class="info" v-for="(item,index) in imgList" :key="index">
                    <img :src="root+item">
                    <div class="price">
                        <p style='color:orangered;display:inline-block'>￥136</p>
                        <a href="##">￥156</a>
                    </div>                
                </div>
            </div>
            <div class="new">
                <p class="new1">每日上新</p>
                <p class="new2">每日9点，折扣超前</p>
                <img :src="root+item" alt="" v-for="(item,index) in imgList" :key='index'>
            </div>
        </div>
        <div class="bottom">
            <div class="country" v-for="(item,index) in list" :key='index'>
                <p class="title">{{title[index]}}</p>
                <p class="details">{{details[index]}}</p>
                <img :src="root+item" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'flash',
    data(){
        return {
            imgList:[],
            root:"http://localhost:3000",
            list:[],
            title:['国家地区生活馆','家居生活','网易严选'],
            details:['逛遍全球','居住指南','甄选只为你']
        }
    },
    created(){
         this.$axios.get('http://localhost:3000/router/getProduct')
        .then((res)=>{
            if(res.error===1){
                for(var i in res.data){
                    this.imgList.push(res.data[i].path);
                    
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
         this.$axios.get('http://localhost:3000/router/getPicture')
        .then((res)=>{
            if(res.err===1){
                for(var i in res.data){
                    this.list.push(res.data[i].path);
                    
                }
                // console.log(this.list)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
div{
    .w(375);
    .h(294);
    .top{
       .h(157);
        display: flex;
         .flash{
             .h(157);
             span{
                 .fs(20);
                 display: inline-block;
                 .ml(5);
             }
             figure{
                 .fs(10);
                 display: inline-block;
                 .ml(35);
             }
             .info{
                 .w(90);
                 .h(100);
                 .ml(2);
                  display: inline-block;
                  img{
                      .w(70);
                      .h(40);
                  }
                 .price{
                     .w(90)!important;
                     .h(60)!important;
                     .lh(60);
                     display: flex;
                     p{
                         .fs(18);
                          .mr(5);
                     }
                     a{
                         .fs(14);
                         text-decoration: line-through;
                         color:#666;                   
                     }
                 }
             }
         }   
        .new{
            width: "50%";
           .h(157);
            .new1{
                .ml(5);
                .mt(10);
                .fs(20);
            }
            .new2{
                .ml(5);
                .mt(10);
                .fs(14)
            }
            img{
                .w(70);
                .h(60);
                .mt(20);
                .ml(15)
            }
        }
    }
    .bottom{
         .h(137);
         display: flex;
         .country{
              .h(137);
              .w(125);
              .title{
                  .fs(16);
                  .mt(10);
                  .ml(12);
                  font-weight: bold;
              }
              .details{
                
                  .mt(10);
                  .fs(12);
                  .ml(30);
                  color: #666;
              }
              img{
                  .w(100);
                  .ml(5);
                  .mt(10);
              }
         }
    }
}

</style>


