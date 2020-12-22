<template>
  <app-project>
    <h3 slot="title">StrongB0x Accounting Solution</h3>
    <img
      slot="image1"
      src="../../../dist/works/portfolio/_A001.png"
      class="img-fluid"
    />
    <img
      slot="image2"
      src="../../../dist/works/portfolio/_A002.png"
      class="img-fluid"
    />
    <img
      slot="image3"
      src="../../../dist/works/portfolio/_A003.png"
      class="img-fluid"
    />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="https://strongb0x-php.herokuapp.com/" target="_blank"
        >strongb0x-php.herokuapp.com</a
      >
    </p>
    <span slot="date">22 Sept, 2020</span>
    <a href="#" slot="github">[Private]</a>
    <span slot="description"
      >Accounting Solution for Small Vendors
      <br />
      <i class="fa fa-user" aria-hidden="true"></i>johndoe@example.org<br />
      <i class="fa fa-lock" aria-hidden="true"></i>abcd1234
    </span>
    <ul slot="technology">
      <li>HTML</li>
      <li>SCSS</li>
      <li>Javascript</li>
      <li>Vue.js</li>
      <li>Vuetify</li>
      <li>php</li>
      <li>Laravel</li>
      <li>MySQL</li>
    </ul>
  </app-project>
</template>

<script>
import Project from "./Project";

export default {
  components: {
    appProject: Project
  }
};
</script>
