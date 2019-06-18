<template>
  <div id="portfolio" class="page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-3 col-4">
          <h4>Portfolio</h4>
        </div>
        <div class="col d-md-none d-none d-sm-none d-lg-block">
          <p class="headline text-muted">My Best Works</p>
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <ul>
          <li>
            <button
              type="button"
              class="btn btn-primary"
              :class="{'btn-active' : none}"
              @click="filter('*')"
            >All</button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-primary"
              :class="{'btn-active' : media}"
              @click="filter('.media')"
            >Media</button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-primary"
              :class="{'btn-active' : illustration}"
              @click="filter('.illustration')"
            >Illustration</button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-primary"
              :class="{'btn-active' : video}"
              @click="filter('.video')"
            >Video</button>
          </li>
        </ul>
      </div>
      <br>
      <br>
      <div class="row grid">
        <div v-for="i in 4" :key="i" class="col-lg-3 col-md-4 col-sm-6 col-6 grid-item">
          <div class="card" data-content="A Very Long Project Title">
            <img
              :src="'https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/portfolio/' + i + '.jpg'"
              class="card-img-top"
              alt="..."
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6 grid-item media">
          <div class="card" data-content="Project Title">
            <img
              :src="'https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/portfolio/' + 1 + '.jpg'"
              class="card-img-top"
              alt="..."
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6 grid-item illustration">
          <div class="card" data-content="Project Title">
            <img
              :src="'https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/portfolio/' + 3 + '.jpg'"
              class="card-img-top"
              alt="..."
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6 grid-item video">
          <div class="card" data-content="Project Title">
            <img
              :src="'https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/portfolio/' + 9 + '.jpg'"
              class="card-img-top"
              alt="..."
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Isotope from "isotope-layout";

let iso;

export default {
  data() {
    return {
      none: true,
      media: false,
      illustration: false,
      video: false
    };
  },
  mounted() {
    this.iso = new Isotope(".grid", {
      itemSelector: ".grid-item"
    });
    $("img")
      .imagesLoaded()
      .progress((instance, image) => {
        this.iso.layout();
      });
  },
  methods: {
    filter(payload) {
      this.iso.arrange({ filter: payload });
      this.none = false;
      this.media = false;
      this.illustration = false;
      this.video = false;
      switch (payload) {
        case "*":
          this.none = true;
          break;
        case ".media":
          this.media = true;
          break;
        case ".illustration":
          this.illustration = true;
          break;
        case ".video":
          this.video = true;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #e65959;

#portfolio {
}

ul {
  list-style-type: none;
  margin: auto;
  padding: 0;
  li {
    display: inline-block;
    button {
      font-family: "PT Sans", sans-serif !important;
      border-radius: 0;
      border: 0;
      background-color: #fff;
      color: #888;
      font-size: 0.85rem;
      &:active {
        background-color: $color !important;
        color: #888 !important;
        border: 0 !important;
        box-shadow: none !important;
      }

      &:hover {
        background-color: #eee !important;
        // background-color: $color !important;
        color: #888 !important;
        border: 0 !important;
        box-shadow: none !important;
      }
      &:focus {
        box-shadow: none;
      }
    }
  }
}

.btn-active {
  background-color: $color;
  color: #fff;
}

@keyframes overlay-appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes overlay-disappear {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.card {
  margin-bottom: 1.5rem;
  border-radius: 0;

  img {
    border-radius: 0;
  }
  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    animation: overlay-disappear 0.5s ease-in forwards;
    color: #fff;
    padding: 1rem;
    text-decoration: underline $color;
    text-underline-position: under;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
    &::after {
      content: attr(data-content);
      animation: overlay-appear 0.5s ease-in forwards;
    }
  }
}
</style>
