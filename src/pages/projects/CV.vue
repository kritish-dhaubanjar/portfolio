<template>
  <app-project>
    <h3 slot="title">CV/Resume Maker</h3>
    <img
      slot="image1"
      src="../../../dist/works/portfolio/_CV001.png"
      class="img-fluid"
    />
    <img
      slot="image2"
      src="../../../dist/works/portfolio/_CV002.png"
      class="img-fluid"
    />
    <img
      slot="image3"
      src="../../../dist/works/portfolio/_CV003.png"
      class="img-fluid"
    />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="http://cv.waytosuccess.com.np" target="_blank"
        >cv.waytosuccess.com.np</a
      >
    </p>
    <span slot="date">2 Aug, 2020</span>
    <a href="#" slot="github">[Private]</a>
    <span slot="description">Online Resume builder </span>
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
