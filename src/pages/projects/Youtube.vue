<template>
  <app-project>
    <h3 slot="title">Youtube Audio Downloader</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_YT001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_YT002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_YT003.png" class="img-fluid" />
    <span slot="date">21 July, 2019</span>
    <a
      href="https://github.com/kritish-dhaubanjar/youtube-audio-download-player"
      target="_blank"
      slot="github"
    >github.com/kritish-dhaubanjar/youtube-audio-download-player</a>
    <span
      slot="description"
    >An android application to search, download and play youtube audio, streamed through a node server in heroku.</span>
    <ul slot="technology">
      <li>Nativescript-vue</li>
      <li>Vue.js</li>
      <li>Android</li>
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