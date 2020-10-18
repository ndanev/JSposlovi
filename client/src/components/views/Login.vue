<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="offset-md-3"></div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h1 class="d-flex justify-content-center align-items-center">
                Login to
                <router-link class="navbar-brand logo ml-3" to="/">
                  <i class="fab fa-js"></i> poslovi
                </router-link>
              </h1>
            </div>
            <div class="card-body">
              <form @submit.prevent="userLogin">
                <div class="form-group">
                  <label for="username">Username*</label>
                  <input
                    v-model="username"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    id="username"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password*</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div class="form-group">
                  <input type="submit" value="Submit" class="primary-button w-100" />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <router-link to="/register" class="card-link">You don't have an account?</router-link>
            </div>
          </div>
        </div>
        <div class="offset-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    userLogin() {
      let user = {
        username: this.username,
        password: this.password
      };

      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>