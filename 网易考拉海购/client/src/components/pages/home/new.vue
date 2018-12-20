<template>
   <div>
       <section>
           <img src="../../../assets/2.png" alt="">
       </section>
       <footer>
           <p v-for="(item,index) in list" :key="index">
               <span class="use">{{detals[index]}}</span>
               <span class='zhijiang'>礼盒券后直降</span>
               <span class="price">130</span>
               <img :src="root+item" alt="">
           </p>
       </footer>
   </div> 
</template>
<script>
export default {
    name:"activity",
    data(){
        return {
            list:[],
            detals:['使用券攻略','神价热销榜','人气护肤榜'],
            root:'http://localhost:3000'
        }
    },
    created(){
        this.$axios.get('http://localhost:3000/router/getPicture')
        .then((res)=>{
            if(res.err===1){
                for(var i in res.data){
                    this.list.push(res.data[i].path);
                    
                }
                
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
    .mt(10);
    .w(375);
    .h(400);
    section{
        .w(375);
        .h(250);
        img{
            .w(375);
            .h(250);
        }
    }
    footer{
        .w(375);
        .h(150);
        p{ 
            .w(110);
            .h(140);
            .ml(10);
            .fs(16);
            .mt(10);
            background:#cccccc;
            display: inline-block;
            span{
                display: block;
                text-align: center;
                .mt(5);
                .fs(12);
            }
            img{
                .w(100);
                .ml(5);
            }
        }
    }
}
</style>


