<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="offset-md-2"></div>
        <div class="col-md-8">
          <ul v-if="user" class="list-group">
            <li class="list-group-item d-flex justify-content-between">
              Name:
              <span>{{user.name}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              Username:
              <span>{{user.username}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              Email:
              <span>{{user.email}}</span>
            </li>
          </ul>
        </div>
        <div class="offset-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ...mapActions(["getProfile"])
  },
  created() {
    this.getProfile();
  }
};
</script>