<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in list" :key='index' ><img :src="root+item.path" alt="" ></mt-swipe-item>
    </mt-swipe>
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    name:'banner',
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
    .h(188);
    img{
    .w(375);
    .h(188);
    
  
}
}

</style>


