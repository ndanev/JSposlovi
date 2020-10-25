<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <router-link class="navbar-brand logo" to="/">
          <i class="fab fa-js"></i> poslovi
        </router-link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="d-flex align-items-center">
            <div class="mr-1">
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </div>
            <div class="navbar-toggler-menu">Menu</div>
          </div>
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
            <li class="nav-item d-flex align-items-center">
              <router-link to="/job/create" class="post-job" v-if="isLoggedIn">
                <i class="fas fa-plus-circle"></i> Add Job
              </router-link>
            </li>
            <li class="nav-item dropdown" v-if="isLoggedIn">
              <a
                class="nav-link dropdown-toggle d-flex align-items-center"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-user-circle avatar-image"></i>
                Profile
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/profile" class="nav-link">Your Account</router-link>
                <div class="dropdown-divider"></div>
                <a to="/logout" class="nav-link nav-link-logout" @click.prevent="logoutUser">
                  <i class="fas fa-sign-out-alt"></i> Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn", "user"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>
