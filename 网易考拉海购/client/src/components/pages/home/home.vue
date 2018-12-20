<template>
	<div>
       <first/>
	   <banner/>
       <navigation/>
       <flash/>
       <activity/>
       <new-pro/>
       <new-pro/>
       <tuijian/>
       <goods/>
       <tabbar/>
	</div>
</template>

<script>
import first from "../common/header"
import banner from "../home/banner"
import navigation from '../home/navigation'
import flash from '../home/flash'
import activity from "../home/activity"
import newPro from "../home/new"
import tuijian from '../home/tuijian'
import goods from '../home/goods'
import tabbar from '../common/tabbar'
export default{
    name:'home',
    components:{
        first,banner,navigation,flash,activity,tabbar,newPro,tuijian,goods
    }
}
</script>

<style lang="less" scoped>

		
</style>

