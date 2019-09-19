<template>
  <div id="portfolio" class="page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-3 col-4">
          <h4>Portfolio&nbsp;&nbsp;</h4>
        </div>
        <div class="col d-md-none d-none d-sm-none d-lg-block">
          <p class="headline text-muted">My Best Works</p>
        </div>
      </div>
      <br />
      <br />
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
              :class="{'btn-active' : website}"
              @click="filter('.website')"
            >Website</button>
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
              :class="{'btn-active' : academic}"
              @click="filter('.academic')"
            >Academic</button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-primary"
              :class="{'btn-active' : mobile}"
              @click="filter('.mobile')"
            >Mobile</button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-primary"
              :class="{'btn-active' : misc}"
              @click="filter('.misc')"
            >Misc</button>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div class="row grid">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item website">
          <router-link to="/pmconstructioneng">
            <div class="card" data-content="P.M. Construction and Engineers">
              <img src="../../dist/works/_PM.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item website">
          <router-link to="/myportfolio">
            <div class="card" data-content="My Portfolio">
              <img src="../../dist/works/_portfolio.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item website">
          <router-link to="/tantrajyotish">
            <div class="card" data-content="Tantrajyotish">
              <img src="../../dist/works/_tantrajyotish.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item website">
          <router-link to="/hashtag">
            <div class="card" data-content="#Tag Online Store">
              <img src="../../dist/works/_hashtag.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item illustration">
          <div class="card" data-content="Lite Technical Exhibition 2019 HAS">
            <img src="../../dist/works/HAS.jpg" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item illustration">
          <div class="card" data-content="Counter Strike 1.6 Tournament 2019">
            <img src="../../dist/works/_CS.jpg" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item academic">
          <router-link to="/semantic">
            <div class="card" data-content="Semantic Question Pair Matching">
              <img src="../../dist/works/_Major.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item academic">
          <router-link to="homeautomation">
            <div class="card" data-content="Home Automation System with RPi">
              <img src="../../dist/works/_HAS.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item mobile">
          <router-link to="/charon">
            <div class="card" data-content="Charon Classroom Applcation">
              <img src="../../dist/works/_Charon.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item mobile">
          <router-link to="/youtube">
            <div class="card" data-content="Youtube Audio Downloader">
              <img src="../../dist/works/_Youtube.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 grid-item misc">
          <router-link to="/sqlelectron">
            <div class="card" data-content="SQL Electron Client">
              <img src="../../dist/works/_SQL.png" class="card-img-top" alt="..." />
            </div>
          </router-link>
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
      website: false,
      illustration: false,
      academic: false,
      mobile: false,
      misc: false
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
      this.website = false;
      this.illustration = false;
      this.academic = false;
      this.mobile = false;
      this.misc = false;
      switch (payload) {
        case "*":
          this.none = true;
          break;
        case ".website":
          this.website = true;
          break;
        case ".illustration":
          this.illustration = true;
          break;
        case ".academic":
          this.academic = true;
          break;
        case ".mobile":
          this.mobile = true;
          break;
        case ".misc":
          this.misc = true;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #e65959;

ul {
  list-style-type: none;
  margin: auto;
  padding: 0;
  text-align: center;
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
    background-color: rgba(0, 0, 0, 0.85);
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
