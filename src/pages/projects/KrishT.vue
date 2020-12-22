<template>
  <app-project>
    <h3 slot="title">Krish T. Trading &amp; Industries</h3>
    <img
      slot="image1"
      src="../../../dist/works/portfolio/_KT001.png"
      class="img-fluid"
    />
    <img
      slot="image2"
      src="../../../dist/works/portfolio/_KT002.png"
      class="img-fluid"
    />
    <img
      slot="image3"
      src="../../../dist/works/portfolio/_KT003.png"
      class="img-fluid"
    />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="https://krisht-trading.com/" target="_blank"
        >krisht-trading.com</a
      >
    </p>
    <span slot="date">1 Dec, 2020</span>
    <a href="#" slot="github">[Private]</a>

    <span slot="description"
      >Portfolio website for "Krish T. Trading &amp; Industries".
    </span>
    <ul slot="technology">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Vue.js</li>
      <li>php</li>
      <li>Cockpit</li>
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
