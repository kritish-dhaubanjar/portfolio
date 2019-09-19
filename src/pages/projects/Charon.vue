<template>
  <app-project>
    <h3 slot="title">Charon Classroom Android Application</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_CH001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_CH002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_CH003.png" class="img-fluid" />
    <span slot="date">14 April, 2018</span>
    <a
      href="https://github.com/kritish-dhaubanjar/Android-Application-for-Class"
      target="_blank"
      slot="github"
    >github.com/kritish-dhaubanjar/Android-Application-for-Class</a>
    <span
      slot="description"
    >An android application, to assist the students of any institution, in his daily sessions like routines, resources, events, news and updates. With integrated Academic calendar and syllabus, heavily used by students and well maintained throughout its life.</span>
    <ul slot="technology">
      <li>Java</li>
      <li>Android</li>
      <li>SQLite</li>
      <li>php</li>
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