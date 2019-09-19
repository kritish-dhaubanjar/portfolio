<template>
  <div id="drawer" class="d-md-block d-sm-block d-block d-lg-none d-xl-none">
    <img src="./../assets/jin.png" class="img-fluid" />
    <h3>Kritish Dhaubanjar</h3>
    <p class="text-muted">Computer Engineer</p>
    <ul class="list-group" @click="toggleDrawer">
      <!-- <li class="list-group-item active-link">Home</li> -->
      <router-link to="/" exact tag="li" class="list-group-item" active-class="active-link">Home</router-link>
      <router-link
        to="/aboutme"
        tag="li"
        class="list-group-item"
        active-class="active-link"
      >About me</router-link>
      <router-link
        to="/resume"
        exact
        tag="li"
        class="list-group-item"
        active-class="active-link"
      >Resume</router-link>
      <router-link
        to="/portfolio"
        exact
        tag="li"
        class="list-group-item"
        active-class="active-link"
      >Portfolio</router-link>
      <!-- <router-link to="/blog" exact tag="li" class="list-group-item" active-class="active-link">Blog</router-link> -->
      <router-link
        to="/contact"
        exact
        tag="li"
        class="list-group-item"
        active-class="active-link"
      >Contact</router-link>
    </ul>
    <br />
    <ul id="social" @click="toggleDrawer">
      <li>
        <a target="_blank" href="https://github.com/kritish-dhaubanjar">
          <i class="fa fa-github"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/kritish-dhaubanjar-72b945156/">
          <i class="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <i class="fa fa-twitter"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["toggleDrawer"]
};
</script>


<style lang="scss" scoped>
#drawer {
  font-family: "Oswald", sans-serif !important;
  background-color: #fff;
  position: fixed;
  height: 100%;
  width: 30%;
  z-index: 20;
  text-align: center;
  overflow-y: auto;
  box-shadow: 1px 5px 10px 0px rgba(0, 0, 0, 0.1);
}
img {
  width: 6.5rem;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
}

@media screen and (min-height: 569px) {
  img {
    margin-top: 2rem;
  }
}
@media screen and (max-width: 375px) {
  #drawer {
    width: 80% !important;
  }
}
@media screen and (max-width: 576px) and (min-width: 375px) {
  #drawer {
    width: 60% !important;
  }
}

@media screen and (min-width: 576px) and (max-width: 768px) {
  #drawer {
    width: 40% !important;
  }
}
</style>

