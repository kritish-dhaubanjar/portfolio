<template>
  <div id="home">
    <div class="wrapper">
      <div class="content">
        <h1>Kritish Dhaubanjar</h1>
        <br>
        <p>Computer Engineer</p>
        <br>
        <table>
          <tr>
            <td>
              <span class="head">Age</span>
            </td>
            <td>23</td>
          </tr>
          <tr>
            <td>
              <span class="head">Address</span>
            </td>
            <td>Koteshwor-35, Kathmandu</td>
          </tr>
          <tr>
            <td>
              <span class="head">e-mail</span>
            </td>
            <td>kritishdhaubanjar@gmail.com</td>
          </tr>
          <tr>
            <td>
              <span class="head">Phone</span>
            </td>
            <td>+977 9843684612</td>
          </tr>
          <tr>
            <td>
              <span class="head">Freelance</span>
            </td>
            <td>Available</td>
          </tr>
          <tr>
            <td>
              <span class="head">Designed by</span>
            </td>
            <td>Kritish Dhaubanjar</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
$transparency: rgba(0, 0, 0, 0.7);
#home {
  font-family: "Oswald", sans-serif !important;
  background-image: url(https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template-red/images/home_page_bg_2.jpg);
  position: fixed;
  height: 100%;
  width: 76.5%;
  top: 0;
  right: 0;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: auto;
  .wrapper {
    display: inline-table;
    background-color: $transparency;
    width: 100%;
    height: 100%;
  }
  .content {
    padding: 3rem 0;
    text-align: center;
    position: relative;
    display: table-cell;
    width: 100%;
    vertical-align: middle;
  }
  &::after {
    content: "";
    background-color: $transparency;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}

h1 {
  color: #fff;
  margin: 0;
  font-size: 3.5rem;
  font-weight: bold;
}

p {
  margin: 0;
  color: #fff;
  font-size: 1.2rem;
}
table {
  margin: auto;
  .head {
    color: #fff;
    border-bottom: 2px #e65959 solid;
  }
  td {
    text-align: left;
    color: #fff;
    padding: 0.4rem;
    font-family: "PT Sans", sans-serif !important;
    font-size: 1.1rem;
  }
  tr {
    td:nth-child(1) {
      font-family: "Oswald", sans-serif !important;
      text-align: right;
    }
  }
}

@media screen and (max-width: 991px) {
  #home {
    width: 100%;
    h1 {
      font-size: 2.75rem;
    }
  }
}
</style>

