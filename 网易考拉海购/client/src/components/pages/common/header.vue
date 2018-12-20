<template>
    <div>
       <span class="icon iconfont icon-saoyisao"></span>
       <input type="text" value="sk2">
       <span class="icon iconfont icon-search" style="margin-left:-40px"></span>
       <span class="icon iconfont icon-xiaoxi"></span>
    </div>
</template>


<script>
export default{
	
	

	
}
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');

div{
	.w(375);
	.h(45);
    .lh(45);
    .fs(18);
    display:flex;
    flex-direction: row;
    justify-content: space-between;
	text-align:center;
}
div>input{
    .w(275);
    .h(35);
    .pl(20);
    margin: 5px 0;
    background: @bgcolor;
    border: none;
    .bdr(5);
}
div>span{
    display: inline-block;
    text-align: center;
    .lh(45);
    .h(45);
    .w(50);
    .fs(18)!important;
    font-size: 18px
}	
</style>

