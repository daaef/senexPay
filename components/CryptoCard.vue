<template>
	<div class="crypto--card">
	  <div class="coin">
		<img :src="coin.img" alt="Coin Image">
		<span class="coin--name">{{ coin.name }}</span>
	  </div>
	  <div class="buy--cost">
		<span class="cost">{{ buy.cost }}</span>
		<button class="buy--btn">Buy</button>
	  </div>
	  <div class="sell-cost">
		<span class="cost">{{ sell.cost }}</span>
		<button class="sell--btn">Sell</button>
	  </div>
	</div>
</template>

<script>
export default {
  name: "CryptoCard",
  props: {
	coin: {type: Object, default: null, required: false},
	buy: {type: Object, default: null, required: false},
	sell: {type: Object, default: null, required: false},
  }
}
</script>