<template>
  <div class="matter-box">
  	<div class="matter-title"><span>菜鸟说</span></div>
  	<div class="matter-list">
  	  <dl>
  	  	<dt><img src="https://img3.doubanio.com/icon/g241320-13.jpg"></dt>
  	  	<dd>来自javascript</dd>
  	  </dl>
  	  <div class="matter-msg">
  	  	<h3>div块元素怎么清除浮动</h3>
  	  	<p></p>
  	  </div>
  	</div>
  </div>
</template>
<style lang="less">
  .matter-title{
  	line-height: .35rem;
  	border-bottom: 1px solid #ccc;
  	padding-left: .2rem;
  	font-weight: bold;
  	font-size: .14rem;
  	color:#000;
  	span{
  		position: relative;
  		overflow: hidden;
  	&:before{
  	  content:"";
  	  display: block;
  	  position: absolute;
  	  left:-.1rem;
  	  top:.05rem;
  	  width:.05rem;
  	  height:.1rem;
  	  background: #f00;
      
  	};
  	}
  }
.matter-list{
	padding: 0 .1rem;
  	border-bottom: 1px solid #ccc;  
  dl{
  	padding-top:.1rem;
  	display:flex;
  	dt{
  	  width:.3rem;
  	  height:.3rem;
  	  border-radius:100%;
  	  overflow: hidden;
  	  img{
  	  	display: block;
  	  	width: 100%;
  	  }
  	}
  	dd{
  		padding-left: .1rem;
  		line-height: .3rem;
  	}
  }
  .matter-msg{
  	h3{
  	  line-height: .3rem;

  	}
  }
}  	
</style>