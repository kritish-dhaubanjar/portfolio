<template>
  <div id="menu" class="d-md-none d-sm-none d-none d-lg-block d-xl-block">
    <img src="./../assets/my_photo.png" class="img-fluid">
    <h3>Kritish Dhaubanjar</h3>
    <p class="text-muted">Computer Engineer</p>
    <br>
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
      <router-link to="/blog" exact tag="li" class="list-group-item" active-class="active-link">Blog</router-link>
      <router-link
        to="/contact"
        exact
        tag="li"
        class="list-group-item"
        active-class="active-link"
      >Contact</router-link>
    </ul>
    <br>
    <br>
    <ul id="social">
      <li>
        <i class="fa fa-github"></i>
      </li>
      <li>
        <i class="fa fa-linkedin"></i>
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

img {
  width: 6.5rem;
  margin-bottom: 1rem;
}

i {
  font-size: 1rem;
  color: #888;
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
</style>
