<template>
  <app-project>
    <h3 slot="title">Portfolio</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_PF001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_PF002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_PF003.png" class="img-fluid" />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="https://www.kritishdhaubanjar.com.np" target="_blank">www.kritishdhaubanjar.com.np</a>
    </p>
    <span slot="date">18 June, 2019</span>
    <a
      href="https://github.com/kritish-dhaubanjar/portfolio"
      target="_blank"
      slot="github"
    >github.com/kritish-dhaubanjar/portfolio</a>
    <span slot="description">My portfolio website.</span>
    <ul slot="technology">
      <li>HTML</li>
      <li>SCSS</li>
      <li>Javascript</li>
      <li>Vue.js</li>
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
