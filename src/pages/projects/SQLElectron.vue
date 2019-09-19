<template>
  <app-project>
    <h3 slot="title">SQL Electron Client</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_SQL001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_SQL002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_SQL003.png" class="img-fluid" />
    <span slot="date">14 June, 2019</span>
    <a
      href="https://github.com/kritish-dhaubanjar/sql-electron-client"
      target="_blank"
      slot="github"
    >github.com/kritish-dhaubanjar/sql-electron-client</a>
    <span slot="description">A cross platform desktop application to manage a database in SQL.</span>
    <ul slot="technology">
      <li>Javascript</li>
      <li>Node.js</li>
      <li>Electron.js</li>
      <li>Semantic UI</li>
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