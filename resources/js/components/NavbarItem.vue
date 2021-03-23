<template>
  <li :class="{active:$route.name == to.name}" >
    <router-link class="nav-link" :to="to">{{print}}</router-link>
  </li>
</template>

<script>
export default {
  props: ['to','print']
}
</script>