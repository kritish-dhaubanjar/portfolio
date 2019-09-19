<template>
  <app-project>
    <h3 slot="title">Tantrajyotish</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_TJ001.jpg" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_TJ002.jpg" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_TJ003.jpg" class="img-fluid" />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="http://www.tantrajyotish.com" target="_blank">www.tantrajyotish.com</a>
    </p>
    <span slot="date">24 April, 2018</span>
    <a
      href="https://github.com/kritish-dhaubanjar/astrology"
      target="_blank"
      slot="github"
    >github.com/kritish-dhaubanjar/astrology</a>
    <span slot="description">Portfolio Website for "Tantrajyotish".</span>
    <ul slot="technology">
      <li>HTML</li>
      <li>SCSS</li>
      <li>Javascript</li>
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