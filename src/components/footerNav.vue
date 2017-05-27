<template>
	<div class="footer">
		<router-link active-class="footer-active" to="/Home">首页</router-link>	
		<router-link active-class="footer-active" to="/Special">专题</router-link>	
		<router-link active-class="footer-active" to="/Course">教程</router-link>	
		<router-link active-class="footer-active" to="/Interview">面试</router-link>	
		<router-link active-class="footer-active" to="/Mine">我的</router-link>	
	</div>
</template>

<style lang="less">
.footer{
	width:100%;
	display: flex;
	line-height:.4rem;
	position:fixed;
	bottom:0;
	border-top:solid #ccc 1px;
	a{
		flex:1;
		text-align: center;
	}
	.footer-active{
		color:#f00;
	}
}	
</style>