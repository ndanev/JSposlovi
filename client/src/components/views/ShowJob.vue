<template>
  <div>
    <hero class="hero-show-job">
      <div class="container">
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-md-10">
            <div class="single-job-title">
              <img :src="job.companyImageUrl" alt />
              <div>
                <h1 class="hero-title">{{job.jobTitle}}</h1>
                <div>
                  at
                  <span>{{job.companyName}}</span> -
                  <a
                    v-if="job.applicationTarget !== null"
                    :href="job.applicationTarget"
                    target="_blank"
                    class="single-job-link"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    {{job.applicationTarget}}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="offset-md-1"></div>
        </div>
      </div>
    </hero>
    <div class="single-job">
      <div class="container">
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-md-10"></div>
          <div class="offset-md-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobsService from "@/services/JobsService";
import Hero from "@/components/Hero";
export default {
  name: "ShowJob",
  components: {
    Hero
  },
  data() {
    return {
      job: {}
    };
  },
  async mounted() {
    const jobId = this.$route.params.jobId;
    this.job = (await JobsService.showSingleJob(jobId)).data;
    console.log(this.job);
  }
};
</script>