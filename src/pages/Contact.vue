<template>
  <div id="contact" class="page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-3 col-4">
          <h4>Contact</h4>
        </div>
        <div class="col d-md-none d-none d-sm-none d-lg-block">
          <p class="headline text-muted">Get In Touch</p>
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="info col-lg-6 col-md-6 col-12">
          <h6>
            <span>Get in Touch</span>
          </h6>
          <p>I'm very apporachable, and would love to speak to you. Feel free to call, send me an email, tweet or simply complete the enquiry form.</p>
          <table>
            <tr>
              <td>
                <span class="head">
                  <i class="fa fa-map-marker"></i>
                </span>
              </td>
              <td>Koteshwor-35, Kathmandu</td>
            </tr>
            <tr>
              <td>
                <span class="head">
                  <i class="fa fa-envelope"></i>
                </span>
              </td>
              <td>kritishdhaubanjar@gmail.com</td>
            </tr>
            <tr>
              <td>
                <span class="head">
                  <i class="fa fa-phone"></i>
                </span>
              </td>
              <td>+977 9843684612</td>
            </tr>
            <tr>
              <td>
                <span class="head">
                  <i class="fa fa-check-circle"></i>
                </span>
              </td>
              <td>Freelance Available</td>
            </tr>
          </table>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <h6>
            <span>Contact Form</span>
          </h6>
          <form action="https://formspree.io/kritishdhaubanjar@gmail.com" method="POST">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Full Name"
                @focus="onFocus(1)"
                @blur="onBlur(1)"
                name="name"
                required
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-user-circle"></i>
                </span>
              </div>
              <hr ref="name" />
            </div>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email Address"
                @focus="onFocus(2)"
                @blur="onBlur(2)"
                name="email"
                required
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <hr ref="email" />
            </div>
            <div class="input-group mb-3">
              <textarea
                class="form-control"
                placeholder="Message for me"
                rows="4"
                @focus="onFocus(3)"
                @blur="onBlur(3)"
                name="message"
                required
              ></textarea>
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-comments"></i>
                </span>
              </div>
              <hr ref="message" />
            </div>
            <button type="submit" class="btn btn-outline-danger">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onFocus(id) {
      switch (id) {
        case 1:
          $(this.$refs.name).addClass("focused");
          break;
        case 2:
          $(this.$refs.email).addClass("focused");
          break;
        case 3:
          $(this.$refs.message).addClass("focused");
          break;
      }
    },

    onBlur(id) {
      switch (id) {
        case 1:
          $(this.$refs.name).removeClass("focused");
          break;
        case 2:
          $(this.$refs.email).removeClass("focused");
          break;
        case 3:
          $(this.$refs.message).removeClass("focused");
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
}

td {
  font-size: 0.9rem;
  font-weight: 500;
  padding-bottom: 1.5rem;
  text-align: center;
  i {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 2rem;
    color: #adb5bd;
  }
}

tr {
  td:nth-child(2) {
    text-align: left;
  }
}
.input-group {
  border-bottom: solid #fff 2px;
}
input,
textarea {
  font-size: 0.85rem;
  border-radius: 0;
  border-right: 0;
  padding: 1.15rem;
  font-family: "PT Sans", sans-serif !important;
}

input:focus {
  box-shadow: none;
}

hr {
  width: 0%;
  margin: 0;
  position: absolute;
  z-index: 10;
  border: solid #ced4da 1px !important;
  bottom: 0;
  animation: border-blur 1s forwards;
}

@keyframes border-focus {
  from {
    display: block;
    border-color: $color;
    width: 0%;
  }
  to {
    display: block;
    border-color: $color;
    width: 99%;
  }
}

@keyframes border-blur {
  to {
    display: block;
    border-color: #ced4da;
    width: 0%;
  }
  from {
    display: block;
    border-color: $color;
    width: 99%;
  }
}

.focused {
  animation: border-focus 1s forwards;
}

textarea:focus {
  box-shadow: none;
}

button {
  font-size: 0.85rem;
  border-radius: 0;
  border-width: 2px;
  font-family: "PT Sans", sans-serif !important;
}

.input-group-text {
  border-radius: 0 !important;
  background-color: #fff;
  i {
    color: #adb5bd;
  }
}
</style>