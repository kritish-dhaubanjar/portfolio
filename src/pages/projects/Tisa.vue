<template>
  <app-project>
    <h3 slot="title">Tisa Cafe</h3>
    <img
      slot="image1"
      src="../../../dist/works/portfolio/_TC001.png"
      class="img-fluid"
    />
    <img
      slot="image2"
      src="../../../dist/works/portfolio/_TC002.png"
      class="img-fluid"
    />
    <img
      slot="image3"
      src="../../../dist/works/portfolio/_TC003.png"
      class="img-fluid"
    />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="https://tisacafe.com/" target="_blank">tisacafe.com</a>
    </p>
    <span slot="date">8 Mar, 2020</span>
    <a href="#" slot="github">[Private]</a>

    <span slot="description">Portfolio website for "Tisa Cafe". </span>
    <ul slot="technology">
      <li>HTML</li>
      <li>CSS</li>
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
