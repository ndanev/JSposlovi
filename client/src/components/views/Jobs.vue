<template>
  <div class="mt-5">
    <div class="container">
      <div class="row">
        <div class="offset-md-1"></div>
        <div class="col-md-10">
          <div class="job-card d-flex mb-3" v-for="job in jobs" :key="job._id">
            <div class="job-card-image">
              <img :src="job.companyImageUrl" alt />
            </div>
            <div class="job-card-content">
              <div class="job-card-title">
                <router-link to="/about">{{job.jobTitle}}</router-link>
              </div>
              <div class="job-card-company">
                <span>{{job.companyName}}</span>
                - {{job.location}}
              </div>
              <div class="job-card-desc">{{job.jobDesc.substring(0,50)}}</div>
            </div>
            <div class="job-card-type">{{job.jobType}}</div>
          </div>
        </div>
        <div class="offset-md-1"></div>
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
  async mounted() {
    this.jobs = (await JobsService.getAllJobs()).data;
  }
};
</script>