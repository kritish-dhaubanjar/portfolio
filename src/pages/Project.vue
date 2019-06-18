<template>
  <div id="project" class="page">
    <div class="container-fluid">
      <h3>Project Portfolio</h3>
      <button type="button" class="btn btn-primary return" @click="$router.go(-1)">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <div class="row">
        <div class="portfolio-carousel col-lg-6 col-md-6 col-12">
          <div class="owl-carousel">
            <div>
              <img
                src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/portfolio/portfolio_details/1_1.jpg"
                class="img-fluid"
              >
            </div>
            <div>
              <img
                src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/portfolio/portfolio_details/1_2.jpg"
                class="img-fluid"
              >
            </div>
            <div>
              <img
                src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/portfolio/portfolio_details/1_3.jpg"
                class="img-fluid"
              >
            </div>
          </div>
          <div class="navigation">
            <button class="btn btn-primary" @click="prev">
              <i class="fa fa-angle-left"></i>
            </button>
            <button class="btn btn-primary" @click="next">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <h6>
            <span>Description</span>
          </h6>
          <p>
            <i class="fa fa-user" aria-hidden="true"></i>
            Kritish Dhaubanjar
          </p>
          <p>
            <i class="fa fa-globe" aria-hidden="true"></i>
            <a href="www.krtishdhaubanjar.com.np">www.kritishdhaubanjar.com.np</a>
          </p>
          <p>
            <i class="fa fa-calendar" aria-hidden="true"></i>25 March, 2019
          </p>
          <p>
            <i class="fa fa-github" aria-hidden="true"></i>https://github.com/kritish-dhaubanjar
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure quos nam expedita quasi similique sunt qui, eos, voluptates doloremque culpa esse recusandae debitis quaerat inventore quia rerum nesciunt assumenda!</p>
          <br>
          <h6>
            <span>Technology</span>
          </h6>
          <div class="technology">
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>Vue.js</li>
              <li>Vue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let owl;
export default {
  mounted() {
    $(document).ready(function() {
      owl = $(".owl-carousel").owlCarousel({
        items: 1,
        dots: false
      });
    });
  },
  methods: {
    next() {
      owl.trigger("next.owl.carousel");
    },

    prev() {
      owl.trigger("prev.owl.carousel");
    }
  }
};
</script>


<style lang="scss" scoped>
$color: #e65959;
#project {
  background-color: #fff;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  h3 {
    font-family: "Oswald", sans-serif !important;
    margin-bottom: 2rem;
  }
}
.portfolio-carousel {
  height: min-content !important;
}
a {
  color: #e65959;
}
.owl-carousel {
  margin-bottom: 2rem;
}
i {
  padding-right: 1rem;
  color: #e65959;
}
p {
  font-size: 0.9rem;
}

.navigation {
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 50%;
  margin-top: -25px;
  padding-right: 1.9rem;
}

.return {
  position: fixed;
  height: 3rem;
  top: 0;
  background-color: #eee !important;
  right: 0;
  width: 3rem;
  z-index: 1000;
  padding: 0.5rem;
  &:hover {
    i {
      color: #fff !important;
    }
    background-color: $color !important;
  }
  i {
    padding: 0;
    color: #888;
    font-size: 1.25rem;
  }
}

button {
  width: 2rem;
  height: 2.5rem;
  border-radius: 0;
  border: 0;
  background-color: #fff !important;
  &:active {
    background-color: #fff !important;
    color: #3e3e3e !important;
    border: 0 !important;
    box-shadow: none !important;
  }

  &:hover {
    background-color: #fafafa !important;
    border: 0 !important;
    box-shadow: none !important;
    i {
      color: #3e3e3e;
    }
  }
  &:focus {
    box-shadow: none;
  }
}
button:last-child {
  float: right;
}

.technology {
  ul {
    padding: 0;
    list-style-type: none;
    li {
      font-family: "PT Sans", sans-serif;
      font-size: 0.75rem;
      margin-right: 0.5rem;
      background-color: #eee;
      padding: 0.2rem 0.5rem;
      display: inline-block;
    }
  }
}

@media screen and (max-width: 991px) {
  h3 {
    margin-top: 3rem;
  }
}
</style>

