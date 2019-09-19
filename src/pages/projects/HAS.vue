<template>
  <app-project>
    <h3 slot="title">Home Automation with RPi</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_HAS001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_HAS002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_HAS003.png" class="img-fluid" />
    <span slot="date">July, 2018</span>
    <a
      href="https://github.com/kritish-dhaubanjar/raspi-home-automation"
      target="_blank"
      slot="github"
    >github.com/kritish-dhaubanjar/raspi-home-automation</a>
    <p
      slot="description"
    >Home Automation System(HAS) using Raspberry Pi 3 employed the integration of networking and relays to provide the user with software control of various electrical appliances within their home, offering events, triggers and real-time synchronization in the overall multiuser-system.</p>
    <ul slot="technology">
      <li>Java</li>
      <li>JavaFX</li>
      <li>MySQL</li>
      <li>Raspberry Pi</li>
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

