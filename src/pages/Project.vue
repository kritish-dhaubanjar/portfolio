<template>
  <div id="project">
    <div class="container-fluid">
      <h3>Project Portfolio</h3>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
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
        <div class="col-6">
          <h6>
            <span>Description</span>
          </h6>
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
  position: fixed;
  height: 100%;
  width: 100%;
  h3 {
    font-family: "Oswald", sans-serif !important;
    margin-bottom: 2rem;
  }
}

.navigation {
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 50%;
  margin-top: -16px;
  padding-right: 1.9rem;
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

@media screen and (max-width: 991px) {
  h3 {
    margin-top: 3rem;
  }
}
</style>

