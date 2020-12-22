<template>
  <app-project>
    <h3 slot="title">Continental HRD Consultants Pvt. Ltd.</h3>
    <img
      slot="image1"
      src="../../../dist/works/portfolio/_CHC001.png"
      class="img-fluid"
    />
    <img
      slot="image2"
      src="../../../dist/works/portfolio/_CHC002.png"
      class="img-fluid"
    />
    <img
      slot="image3"
      src="../../../dist/works/portfolio/_CHC003.png"
      class="img-fluid"
    />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="https://www.continentalhrd.com/" target="_blank">
        www.continentalhrd.com</a
      >
    </p>
    <span slot="date">18 Dec, 2019</span>
    <a href="#" slot="github">[Private]</a>
    <p slot="description">
      Portfolio website for "Continental HRD Consultants Pvt. Ltd.".
    </p>
    <ul slot="technology">
      <li>HTML</li>
      <li>SCSS</li>
      <li>Javascript</li>
      <li>Vue.js</li>
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
