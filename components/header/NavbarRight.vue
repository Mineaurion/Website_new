<template>
  <ul class="navright">
    <li class="navlink">forum</li>
    <li class="navlink">récompenses</li>
    <li class="shop">
      <NuxtLink to="http://shop.mineaurion.com" target="_blank">
        <div class="coins">
          <div class="coins_left">
            <img class="coin_a" src="~/assets/img/coin.svg" alt="" />
            <img class="coin_b" src="~/assets/img/coin.svg" alt="" />
            <img class="coin_c" src="~/assets/img/coin.svg" alt="" />
          </div>
          <div class="coins_right">
            <img class="coin_d" src="~/assets/img/coin.svg" alt="" />
            <img class="coin_e" src="~/assets/img/coin.svg" alt="" />
            <img class="coin_f" src="~/assets/img/coin.svg" alt="" />
          </div>
        </div>
        <img class="bag" src="~/assets/img/bag.svg" alt="" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.navright {
  display: flex;
  gap: var(--header-nav-gap);
  justify-content: center;
  align-items: center;
}
.shop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1em;
  position: relative;
  cursor: pointer;
}

.coins {
  /* background: #000; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.coins:hover {
  animation: coinsAnimate;
}
.coins_left {
  position: absolute;
  left: 0;
}
.coins_right {
  position: absolute;
  right: -15px;
}
.coin_a {
  position: relative;
  height: 15px;
  bottom: 0px;
  transform: rotate(-20deg);
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.64, 1.74);
}
.shop:hover .coins .coins_left .coin_a {
  transform: translateY(-2px);
}
.coin_b {
  position: relative;
  height: 20px;
  right: 8px;
  top: 2px;
  transform: rotate(45deg);
  transition: transform 220ms 150ms cubic-bezier(0.68, -0.55, 0.64, 1.74);
}
.shop:hover .coins .coins_left .coin_b {
  transform: translateY(-3px);
}
.coin_c {
  position: relative;
  right: 15px;
  height: 15px;
  transform: rotate(-15deg);
  transition: transform 220ms 200ms cubic-bezier(0.68, -0.55, 0.64, 1.74);
}
.shop:hover .coins .coins_left .coin_c {
  transform: translateY(-2px);
}
.coin_d {
  position: relative;
  height: 15px;
  bottom: 0px;
  transform: rotate(-20deg);
  transition: transform 220ms 250ms cubic-bezier(0.68, -0.55, 0.64, 1.74);
}
.shop:hover .coins .coins_right .coin_d {
  transform: translateY(-2px);
}
.coin_e {
  position: relative;
  height: 20px;
  right: 8px;
  top: 2px;
  transform: rotate(45deg);
  transition: transform 220ms 150ms cubic-bezier(0.68, -0.55, 0.64, 1.74);
}
.shop:hover .coins .coins_right .coin_e {
  transform: translateY(-4px);
}
.coin_f {
  position: relative;
  right: 15px;
  height: 15px;
  transform: rotate(-15deg);
  transition: transform 220ms 200ms cubic-bezier(0.68, -0.55, 0.64, 1.74);
}
.shop:hover .coins .coins_right .coin_f {
  transform: translateY(-2px);
}

.bag {
  filter: brightness(0.95);
  transition: filter 220ms;
}
.bag:hover {
  filter: brightness(1);
}
</style>
