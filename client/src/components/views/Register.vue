<template>
  <div class="mt-5">
    <div class="container">
      <div class="row">
        <div class="offset-md-3"></div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h1 class="d-flex justify-content-center align-items-center">
                Sign in to
                <router-link class="navbar-brand logo ml-3" to="/">
                  <i class="fab fa-js"></i> poslovi
                </router-link>
              </h1>
            </div>
            <div class="card-body">
              <form @submit.prevent="userRegister">
                <div class="form-group">
                  <label for="name">Name*</label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    id="name"
                  />
                </div>
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
                  <label for="email">Email*</label>
                  <input
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    id="email"
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
                  <label for="confirm_password">Confirm Password*</label>
                  <input
                    v-model="confirm_password"
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    id="confirm_password"
                  />
                </div>
                <div class="form-group">
                  <input type="submit" value="Submit" class="primary-button w-100" />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <router-link to="/login" class="card-link">You have an account?</router-link>
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
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    userRegister() {
      let user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password
      };
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("login");
        }
      });
    }
  }
};
</script>