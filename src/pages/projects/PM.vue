<template>
  <app-project>
    <h3 slot="title">P.M. Construction and Engineers</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_PM001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_PM002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_PM003.png" class="img-fluid" />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="http://www.pmconstructioneng.com" target="_blank">www.pmconstructioneng.com</a>
    </p>
    <span slot="date">06 July, 2019</span>
    <a href="#" slot="github">[Private]</a>
    <p slot="description">Portfolio website for "P.M Construction and Engineers".</p>
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