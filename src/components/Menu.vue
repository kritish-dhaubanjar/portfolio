<template>
  <div id="menu" class="d-md-none d-sm-none d-none d-lg-block d-xl-block">
    <img src="./../assets/jin.png" class="img-fluid" />
    <h3>Kritish Dhaubanjar</h3>
    <p class="text-muted">Computer Engineer</p>
    <br />
    <ul class="list-group">
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
    <br />
    <ul id="social">
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
export default {};
</script>

<style lang="scss" scoped>
#menu {
  font-family: "Oswald", sans-serif !important;
  text-align: center;
  padding-top: 2rem;
  position: fixed;
  top: 0;
  width: 22.5%;
  height: 100%;
  background-color: #fff;
  left: 0;
  overflow: auto;
}

img {
  width: 6.5rem;
  margin-bottom: 1rem;
}

i {
  font-size: 1rem;
  color: #888;
}
</style>
