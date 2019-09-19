<template>
  <app-project>
    <h3 slot="title">#Tag Online Cloth Store</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_HT001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_HT002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_HT003.png" class="img-fluid" />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="http://www.hashtag.com.np" target="_blank">www.hashtag.com.np</a>
    </p>
    <span slot="date">01 Feburary, 2018</span>
    <a
      href="https://github.com/kritish-dhaubanjar/women-stuff-nepal"
      slot="github"
      target="_blank"
    >github.com/kritish-dhaubanjar/women-stuff-nepal</a>
    <p slot="description">#Tag Online Cloth Store.</p>
    <ul slot="technology">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>php</li>
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
