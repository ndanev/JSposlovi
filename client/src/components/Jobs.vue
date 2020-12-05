<template>
  <div class="mt-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-3 mb-3" v-for="job in jobs" :key="job._id">
          <div class="job-card">
            <div class="job-card-image">
              <img :src="job.companyImageUrl" alt />
            </div>
            <div class="job-card-content">
              <div class="job-card-title">
                <router-link :to="{ name: 'showJob', params: { jobId: job._id }}">{{job.jobTitle}}</router-link>
              </div>
              <div class="job-card-company">
                <span>{{job.companyName}}</span>
                - {{job.location}}
              </div>
              <div class="job-card-technologies">
                <span
                  v-for="(skill, index) in job.skills"
                  :key="index"
                  class="job-card-technologies-item"
                >{{skill}}</span>
              </div>
              <div class="job-card-desc" v-html="job.jobDesc.substring(0,100)"></div>
            </div>
            <div class="job-card-type bg-yellow">{{job.jobType}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobsService from "@/services/JobsService";
export default {
  name: "Jobs",
  data() {
    return {
      jobs: null
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.jobs = (await JobsService.getAllJobs(value)).data;
      }
    }
  }
};
</script>