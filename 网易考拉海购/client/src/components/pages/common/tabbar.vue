<template>
    <ul>
        <li v-for="(item,index) in list" :key='index' @click="change(item.name)" ><router-link :to='item.path' active-class='sel' tag='li'><span :class="item.class"></span><p>{{item.name}}</p></router-link></li>
    </ul>
</template>
<script>
export default {
    name:'tabbar',
    data(){
        return{
           list:[
               {name:'首页',path:'/home',class:'icon iconfont icon-home'},
               {name:'分类',path:'/types',class:'icon iconfont icon-icon_search'},
               {name:'购物车',path:'/shopcar',class:"icon iconfont icon-gouwuchekong"},
               {name:'我的考拉',path:'/my',class:"icon iconfont icon-weibiaoti-_huabanfuben"}
               ],
               selected:'首页',
               styleObj:{
                   color:'red'
               }
        }
    },
    methods:{
        change(item){
           
            this.selected=item;
            // console.log(this.selected)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
ul{
  .w(375);
  list-style: none;
  background: @bgcolor;
  .h(40);
  position: fixed;
  bottom: 0;
  left: 0;
  li{
      float: left;
      .fs(14);
      .w(93);       
      .h(40);
      span{
          display: block;
          text-align: center;
          .fs(18);
      }
      p{
          text-align: center
      }
  }
  .sel{
      color:red;
  }
}
</style>

