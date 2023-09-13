<template>
  <app-project>
    <h3 slot="title">DynamoDB Dashboard</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_DB001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_DB002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_DB003.png" class="img-fluid" />
    <span slot="date">24 September, 2022</span>
    <a href="https://github.com/kritish-dhaubanjar/dynamodb-dashboard" target="_blank"
      slot="github">https://github.com/kritish-dhaubanjar/dynamodb-dashboard</a>
    <span slot="description">A Web GUI Dashboard for local or remote Amazon DynamoDB.</span>
    <ul slot="technology">
      <li>Vue.js</li>
      <li>Node.js</li>
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
