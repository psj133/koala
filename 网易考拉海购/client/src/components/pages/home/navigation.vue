<template>
    <ul>
        <li v-for="(item,index) in list" :key='index'>
            <span class='circle'></span>
            <p>{{item}}</p>         
        </li>
    </ul>
</template>
<script>
export default {
    name:'navigation',
    data(){
        return{
            list:['美妆','母婴','轻奢','营养保健','数码家电','服饰馆','考拉超市','全球旗舰','全球工厂店','黑卡会员']
        }
    },
    mounted(){
        var circle=document.querySelectorAll('.circle');
        for(var i=0;i<circle.length;i++){
            circle[i].style.background="#"+Math.floor(Math.random()*256*256*256).toString(16);
        }
    }
}
</script>
<style lang="less" scoped>
    @import url('../../styles/main.less');
    ul{
        .w(375);
        .h(200);
        list-style: none;
        li{
            .w(75);
            .h(100);
            .fs(14);    
            display: inline-block;      
        };
        span{
            display: block;
            .w(50);
            .h(50);
            .bdr(25);
            .mt(5);
            .ml(10);
        }
        p{
            text-align: center;
            .mt(5);
        }
    }
</style>


