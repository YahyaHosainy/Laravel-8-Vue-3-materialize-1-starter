<template>
  <nav>
    <div class="container">
      <div class="nav-wrapper">
        <router-link class="brand-logo left" to="/">L8 V3</router-link>
        <ul class="right">
          <NavbarItem print="Home" :to="{name:'root'}"></NavbarItem>
          <NavbarItem print="About" :to="{name:'about'}"></NavbarItem>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

import NavbarItem from './NavbarItem'

export default {
  components:{
    NavbarItem
  }
}
</script>