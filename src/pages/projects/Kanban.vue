<template>
  <app-project>
    <h3 slot="title">Kanban Board</h3>
    <img
      slot="image1"
      src="../../../dist/works/portfolio/_KB001.png"
      class="img-fluid"
    />
    <img
      slot="image2"
      src="../../../dist/works/portfolio/_KB001.png"
      class="img-fluid"
    />
    <img
      slot="image3"
      src="../../../dist/works/portfolio/_KB001.png"
      class="img-fluid"
    />
    <p slot="link">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <a
        href="https://kritish-dhaubanjar.github.io/kanban-board/"
        target="_blank"
        >kritish-dhaubanjar.github.io/kanban-board/</a
      >
    </p>
    <span slot="date">15 Oct, 2020</span>
    <a href="https://github.com/kritish-dhaubanjar/kanban-board" slot="github"
      >github.com/kritish-dhaubanjar/kanban-board</a
    >

    <span slot="description">
      A kanban board is an agile project management tool designed to help
      visualize work, limit work-in-progress, and maximize efficiency (or flow).
    </span>
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
