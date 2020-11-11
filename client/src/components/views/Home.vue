<template>
  <div>
    <hero class="hero-home">
      <div class="container">
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-md-10">
            <div class="hero-content">
              <h1 class="hero-title">
                Najtrazeniji
                <span class="hero-innertitle">javascript</span> poslovi.
              </h1>
              <p class="hero-subtitle">
                <i class="fas fa-info-circle"></i>
                Preko
                <span>{{jobsCount.length - 1}}</span>+ poslova
              </p>
              <div class="hero-buttons text-center mt-5">
                <router-link
                  v-if="!isLoggedIn"
                  class="button primary-button"
                  to="/login"
                >Prijavite se</router-link>
                <router-link
                  v-if="!isLoggedIn"
                  class="button secondary-button"
                  to="/register"
                >Napravite svoj nalog</router-link>
              </div>
            </div>
          </div>
          <div class="offset-md-1"></div>
        </div>
      </div>
    </hero>
    <search-job />
    <jobs />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hero from "@/components/Hero.vue";
import Jobs from "@/components/Jobs.vue";
import SearchJob from "@/components/SearchJob.vue";
import JobsService from "@/services/JobsService";
export default {
  name: "Home",
  components: {
    Hero,
    Jobs,
    SearchJob
  },
  data() {
    return {
      jobsCount: ""
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  async created() {
    this.jobsCount = (await JobsService.getAllJobs()).data;
  }
};
</script>