<template>
  <header id="header">
    <nav class="container content-header">
      <HeaderNavbarLeft />
      <HeaderNavbarLogo />
      <HeaderNavbarRight />
    </nav>
  </header>
</template>

<style>
#header {
  height: 120px;
  display: flex;
  align-items: center;
  color: var(--fc-primary);
  font-size: 14px;
}
.content-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navlink {
  text-transform: uppercase;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.navlink::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  margin: -10px 0;
  border-radius: 1px;
  background-color: white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.6) 0s;
}

.navlink:hover:before {
  visibility: visible;
  transform: scaleX(1);
}
</style>
