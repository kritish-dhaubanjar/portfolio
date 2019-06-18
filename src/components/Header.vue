<template>
  <div id="header" class="d-md-block d-sm-block d-block d-lg-none d-xl-none">
    <h5>Kritish Dhaubanjar</h5>
    <h5 class="menu" @click="toggleDrawer">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </h5>
  </div>
</template>

<script>
export default {
  props: ["toggleDrawer"]
};
</script>


<style lang="scss" scoped>
#header {
  font-family: "Oswald", sans-serif !important;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: solid 1px #eee;
  background-color: #fff;
  z-index: 10;
  h5 {
    color: #666;
    margin: 0.86rem;
    font-size: 1.1rem;
    display: inline-block;
  }
}

.menu {
  float: right;
  &:hover {
    cursor: pointer;
  }
}
</style>

