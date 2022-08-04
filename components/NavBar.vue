<template>
  <nav class="">
    <div class="container">
      <div class="logo">
		<img src="/logo.png" alt="SenexPay logo" />
	  </div>
	  <input type="checkbox" id="nav-toggle">
	  <div class="nav--toggle">
		<label for="nav-toggle" class="toggler">
		  <span />
		</label>
	  </div>
	  <div class="navigations">
		<ul class="left--section">
		  <li><a href="">About us</a></li>
		  <li><a href="">FAQ</a></li>
		  <li><a href="">Careers</a></li>
		  <li><a href="">Contact us</a></li>
		  <li><a href="" class="login-lnk">Log in</a></li>
		</ul>
		<ul class="right--section">
		  <li><a href="" class="login-lnk">Log in</a></li>
		  <li><a href="" class="nav-btn"> Get Started</a></li>
		</ul>
		<div class="icon-dropdown">
		  <img src="~/assets/img/nigerian_flag.svg" class="flag" alt="">
		  <img src="~/assets/img/flag_dropdown.svg" class="icon" alt="">
		</div>
	  </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped lang="scss">
  #nav-toggle {
	display: none;
	&:checked {
	  & ~ .navigations {
		transform: none;
	  }
	  & ~ .nav--toggle{
		.toggler {
		  span:after {
			content: "\2715";
		  }
		}
	  }
	}
  }

  .toggler {
	position: fixed;
	z-index: 200;
	color: #FFFFFF;
	font-size: 1.2rem;
	top: 60px;
	transform: translateY(-50%);
	span:after {
	  content: "\2630";
	}
  }
</style>