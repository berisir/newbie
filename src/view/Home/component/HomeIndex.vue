<template>
  <div>
  	<swiper></swiper>
  	<Navlist></Navlist>
  	<Matter></Matter>	
  </div>
</template>

<script>
import swiper from '@/components/swiperBar'
import Navlist from './Navlist'
import Matter from './Matter'
export default {
  components: {
  	swiper,
  	Navlist,
  	Matter
  }	
}
</script>	