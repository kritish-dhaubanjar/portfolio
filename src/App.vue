<template>
  <div class="container">
    <app-menu/>
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Home from "./pages/Home";
export default {
  name: "App",
  components: {
    appMenu: Menu,
    appHome: Home
  }
};
</script>

<style lang="scss">
$color: #e65959;

* {
  // font-family: "Oswald", sans-serif !important;
  /* font-family: "PT Sans", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-muted {
  color: #9c9c9c !important;
}

a {
  color: #2c3e50;
  &:hover {
    color: #2c3e50;
    text-decoration: none !important;
  }
}

.container {
  padding: 0;
  margin: 0;
}

.page {
  font-family: "Oswald", sans-serif !important;
  position: fixed;
  height: 100%;
  width: 76.5%;
  top: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
  h4 {
    margin: 0;
    color: #fff;
    text-align: left;
    background-color: $color;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  h4::before {
    content: "";
    position: absolute;
    background-color: $color;
    top: 0;
    z-index: -10;
    left: -3rem;
    height: 100%;
    width: 100%;
  }
  p {
    font-family: "PT Sans", sans-serif !important;
    font-size: 0.85rem;
    color: #666;
    line-height: 180%;
  }
  .col {
    margin: auto;
    padding-left: 0;
    font-size: 0.95rem;
  }
  @media screen and (max-width: 375px) {
    .col-4 {
      flex: 0 0 40% !important;
      max-width: 100%;
    }
  }
  .headline {
    font-family: "Oswald", sans-serif !important;
    margin: auto;
  }
}

.info {
  margin-bottom: 3rem;
}

h6 {
  font-size: 1.2rem;
  padding-bottom: 1rem;
  font-family: "Oswald", sans-serif !important;

  span {
    border-bottom: 2px solid $color;
  }
}

@media screen and (min-width: 992px) {
  .container-fluid {
    padding: 3.75rem;
  }
}
@media screen and (max-width: 991px) {
  .container-fluid {
    padding-bottom: 6rem !important;
  }
}

@media screen and (max-width: 991px) {
  .page {
    width: 100%;
  }
}
</style>
