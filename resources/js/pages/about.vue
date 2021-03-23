<template>
  <div class="container">
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, cupiditate reiciendis! Nisi rerum delectus maiores nam et. Iure saepe nihil, eligendi soluta officiis minima voluptatum assumenda omnis velit ipsa atque.
    </p>
    <h4>change reactive title</h4>
    <input type="text" v-model="reactive.data.title">

    <!-- Dropdown Trigger -->
    <a class="dropdown-trigger btn green darken-4" href='#' data-target='dropdown1'>Materialize js test</a>
    <!-- Dropdown Structure -->
    <ul id='dropdown1' class='dropdown-content'>
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider" tabindex="-1"></li>
      <li><a href="#!">three</a></li>
      <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
      <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
    </ul>
          
  </div>
</template>

<script>
export default {
  mounted() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems /*, options*/);
  },
  data() {
    return {
      reactive: window.store.reactive
    }
  },
}
</script>