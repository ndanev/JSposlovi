<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand logo" to="/">
        <i class="fab fa-js"></i> poslovi
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Jobs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link" v-if="!isLoggedIn">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link" v-if="!isLoggedIn">Register</router-link>
          </li>
          <li class="nav-item dropdown" v-if="isLoggedIn">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/profile" class="nav-link">Profile</router-link>
              <div class="dropdown-divider"></div>
              <!-- <router-link to="/logout" class="nav-link">Logout</router-link> -->
              <a href="#" class="nav-link">
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style>
</style>
