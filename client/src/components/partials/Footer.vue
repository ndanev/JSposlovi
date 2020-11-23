<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <router-link class="navbar-brand logo" to="/">
            <i class="fab fa-js"></i> poslovi
          </router-link>
        </div>
        <div class="col-md-4">
          <h4>Links</h4>
          <ul class="footer-list">
            <li class="footer-item">
              <router-link class="footer-link" to="/">Jobs</router-link>
            </li>
            <li class="footer-item">
              <router-link class="footer-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
</style>