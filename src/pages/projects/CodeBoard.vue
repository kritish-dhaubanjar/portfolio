<template>
  <app-project>
    <h3 slot="title">CodeBoard</h3>
    <img
      slot="image1"
      src="../../../dist/works/portfolio/_CB001.png"
      class="img-fluid"
    />
    <img
      slot="image2"
      src="../../../dist/works/portfolio/_CB002.png"
      class="img-fluid"
    />
    <img
      slot="image3"
      src="../../../dist/works/portfolio/_CB003.png"
      class="img-fluid"
    />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a href="https://codeboard.netlify.app/" target="_blank"
        >codeboard.netlify.app</a
      >
    </p>
    <span slot="date">21 Dec, 2020</span>
    <a
      href="https://github.com/kritish-dhaubanjar/collaborative-code-editor-client"
      slot="github"
      >github.com/kritish-dhaubanjar/collaborative-code-editor-client</a
    >

    <span slot="description"
      >An online code editor for interviews, troubleshooting, teaching & more…
    </span>
    <ul slot="technology">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Vue.js</li>
      <li>socket.io</li>
      <li>Codemirror</li>
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
