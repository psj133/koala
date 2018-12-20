<template>
    <div>
        <div class="box" v-for="(item,index) in list" :key="index">
            <div class="left">
                <img :src="root+item.path" alt="">
            </div>
            <div class="right">
                <div class="title">ESSTEE LAUDER雅诗兰黛</div>
                <div class='content'>考拉推荐:雅诗兰黛转为女<br>
                                    性研发的红石榴晚露，萃取红<br>
                                    石榴精华，打造完美肌肤
                 </div>
                 <p>￥136</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"goods",
    data(){
        return {
            list:[],
            root:'http://localhost:3000'
        }
    },
    created(){
        this.$axios.get('http://localhost:3000/router/getPicture')
        .then((res)=>{
            if(res.err==1){
                 this.list=res.data;
                 
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
     .box{
         .w(375);
         .h(200);
         .mt(10);
         display: flex;
         .left{
             width: 40%;
            .h(200);
            img{
                 width: 100%;
                .h(200);
            }
         }
         .right{
              width: 60%;
             .h(200);
             .title{
                 .fs(18);
                 .ml(10);
             }
             .content{
                 .mt(10);
                 .fs(16);
                 .ml(10);
             }
             p{
                 .fs(20);
                 color: red;
                 .mt(20);
                 .ml(30);
             }
         }
     }
</style>


