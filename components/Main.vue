<template>
  <main class="body">
	<section class="market">
	  <div class="container small">
		<CryptoCard data-aos="zoom-in" v-for="(crypto, i) in coinList" :buy="crypto.buy" :coin="crypto.coin" :sell="crypto.sell" :key="i"/>
		<p class="market--p">SenexPay Transaction fee is 0.7 percent pegged at $2. <a href="#" class="link">Learn more</a> about our fees.</p>
	  </div>
	</section>
	<section class="bottom--sect">
	  <div class="container">
		<div class="meta--info">
		  <h3 data-aos="fade-right">Your trusted crypto exchange</h3>
		  <p data-aos="fade-right">Our fast payout is why people trust us. Skip the long waits and join the cool people who use SenexPay to buy and sell cryptocurrency everyday.</p>
		</div>
		<div class="meta--img">
		  <div class="meta--container">
			<img data-aos="fade-left" src="~/assets/img/gradient_circle.svg" class="grad--circ" alt="Gradient Circle">
			<img data-aos="fade-left" src="~/assets/img/App_screen2.png" class="app--screen" alt="App screen">
			<div class="country--bubbles">
			  <img data-aos="fade-up" src="~/assets/img/nigeria_bubble.svg" class="bubble" alt="Nigeria Bubble">
			  <img data-aos="fade-up" data-aos-delay="200" src="~/assets/img/southafrica_bubble.svg" class="bubble" alt="SA Bubble">
			  <img data-aos="fade-up" data-aos-delay="400" src="~/assets/img/ghana_bubble.svg" class="bubble" alt="Ghana Bubble">
			</div>
		  </div>
		</div>
	  </div>
	</section>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
	return {
	  coinList: [
		{
		  buy: {
			cost: "$47,842.00"
		  },
		  sell: {
			cost: "$47,842.00"
		  },
		  coin: {
			img: `assets/img/btc.svg`,
			name: "Bitcoin"
		  }
		},
		{
		  buy: {
			cost: "$47,842.00"
		  },
		  sell: {
			cost: "$47,842.00"
		  },
		  coin: {
			img: `assets/img/tether.svg`,
			name: "Bitcoin"
		  }
		},
		{
		  buy: {
			cost: "₦456,000"
		  },
		  sell: {
			cost: "₦456,000"
		  },
		  coin: {
			img: `assets/img/dodge.png`,
			name: "Bitcoin"
		  }
		},
	  ],
	  }
  }
}
</script>

<style scoped>

</style>