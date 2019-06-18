<template>
  <div id="aboutme" class="page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-3 col-4">
          <h4>About Me</h4>
        </div>
        <div class="col d-md-none d-none d-sm-none d-lg-block">
          <p class="headline text-muted">Artist, Thinker, Creative Doer</p>
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <div class="info col-lg-6 col-md-6 col-12">
          <h6>
            <span style="border-bottom:0">I am Web Developer/Designer @ Company.com</span>
          </h6>
          <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.</p>
          <p>Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus. Sed tellus nibh, lobortis ut blandit sed, convallis a mauris.</p>
        </div>
        <div class="info col-lg-6 col-md-6 col-12">
          <h6>
            <span>Testimonials</span>
          </h6>
          <div class="owl-carousel">
            <div class="quotes">
              <img
                src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/testimonials/testimonila_photo_2.png"
                class="img-fluid"
              >
              <p>
                <span
                  class="quote"
                >Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa.</span>
                <br>
                <b>-John Doe</b>
                <br>
                <span class="text-muted">APPLE INC.</span>
              </p>
            </div>
            <div class="quotes">
              <img
                src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/testimonials/testimonila_photo_2.png"
                class="img-fluid"
              >
              <p>
                <span
                  class="quote"
                >Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa.</span>
                <br>
                <b>-John Doe</b>
                <br>
                <span class="text-muted">APPLE INC.</span>
              </p>
            </div>
          </div>
          <div class="owl-control">
            <button class="btn btn-secondary" @click="next">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button class="btn btn-secondary" @click="prev">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="info col-12">
          <h6>
            <span>Services</span>
          </h6>
        </div>
      </div>
      <div class="row">
        <div class="item col-lg-3 col-md-3 col-sm-3 col-6">
          <img
            src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/service/web_design.png"
            class="img-fluid"
          >
          <h6>Web Design</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="item col-lg-3 col-md-3 col-sm-3 col-6">
          <img
            src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/service/copywrite.png"
            class="img-fluid"
          >
          <h6>Copywriter</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="item col-lg-3 col-md-3 col-sm-3 col-6">
          <img
            src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/service/ecommerce.png"
            class="img-fluid"
          >
          <h6>E-Commerce</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="item col-lg-3 col-md-3 col-sm-3 col-6">
          <img
            src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/service/management.png"
            class="img-fluid"
          >
          <h6>Management</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
      </div>

      <div class="row">
        <div class="info col-12">
          <h6>
            <span>Fun Facts</span>
          </h6>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
          <div class="item">
            <i class="fa fa-smile-o"></i>
            <h6>Happy Clients</h6>
            <h5>1,024</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
          <div class="item">
            <i class="fa fa-clock-o"></i>
            <h6>Working Hours</h6>
            <h5>1,024</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
          <div class="item">
            <i class="fa fa-trophy"></i>
            <h6>Awards Won</h6>
            <h5>1,024</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
          <div class="item">
            <i class="fa fa-coffee"></i>
            <h6>Coffee Consumed</h6>
            <h5>1,024</h5>
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

#aboutme {
  h6 {
    margin-bottom: 0;
  }
  .info {
    margin-bottom: 0rem;
  }
}
.item {
  text-align: center;
  img {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 60px;
    // padding: 1rem 5rem;
  }
  h6 {
    font-size: 1rem;
  }
  h5 {
    color: $color;
  }
  i {
    font-size: 3rem;
    padding: 1rem;
    color: #888;
    font-weight: lighter;
  }
}
.row:last-child {
  .item {
    border: solid 1px #fafafa;
    margin-bottom: 1.5rem;
    background-color: #fafafa;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    .item {
      margin: 1.5rem;
    }
  }
}
.quotes {
  margin-right: 1rem;
  img {
    width: 70px;
    position: absolute;
    bottom: 0;
  }
  p {
    font-style: italic;
    background-color: #fafafa;
    margin-top: 1rem;
    margin-left: 3rem;
    margin-bottom: 1rem;
    border: solid 2px #e3e3e3;
    border-radius: 1rem;
    padding: 1.5rem;
    .quote::before {
      content: '"';
    }
    .quote::after {
      content: '"';
    }
    .text-muted {
      font-size: 0.7rem;
    }
  }
}
.owl-control {
  text-align: right;
  button {
    border-radius: 0;
    border: 0;
    background-color: #eee;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    &:active {
      background-color: $color !important;
      color: #fff !important;
      border: 0 !important;
      box-shadow: none !important;
    }

    &:hover {
      background-color: $color !important;
      border: 0 !important;
      box-shadow: none !important;
      i {
        color: #fff;
      }
    }
    &:focus {
      box-shadow: none;
    }
  }
}
</style>