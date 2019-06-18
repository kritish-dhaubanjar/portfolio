<template>
  <div class="container">
    <app-menu/>
    <app-header :toggleDrawer="toggleDrawer"/>
    <transition
      appear
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft"
    >
      <app-drawer v-if="toggle" :toggleDrawer="toggleDrawer"/>
    </transition>
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { eventBus } from "./main";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
export default {
  name: "App",
  data() {
    return { toggle: false };
  },

  methods: {
    toggleDrawer() {
      this.toggle = !this.toggle;
    }
  },
  components: {
    appMenu: Menu,
    appHeader: Header,
    appDrawer: Drawer
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
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
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
    padding-top: 5rem;
    top: 50;
  }
}

#social {
  padding: 0;
  list-style-type: none;
  text-align: center;
  li {
    transition: 0.2s ease-out;
    background-color: #eee;
    display: inline;
    padding-top: 0.2rem;
    padding: 0.25rem 0.6rem;
    margin-right: 0.5rem;
    &:hover {
      transition: 0.2s ease-in;
      background-color: #e65959;
      cursor: pointer;
      i {
        color: #fff;
      }
    }
  }
}

.list-group {
  .active-link {
    background-color: #fcfcfc;
    border-right: solid #e65959 0.25rem;
    &:hover {
      background-color: #fcfcfc;
      border-right: solid #e65959 0.25rem;
      cursor: pointer;
    }
  }

  li {
    text-align: center;
    padding-left: 0.5rem;
    font-weight: 500;
    font-size: 0.9rem;
    border-radius: 0 !important;
    border: 1px solid #f5f5f5;
    border-right: solid #fff 0.25rem;

    &:hover {
      background-color: #fcfcfc;
      border-right: solid #eee 0.25rem;
      cursor: pointer;
    }
  }
}
</style>
