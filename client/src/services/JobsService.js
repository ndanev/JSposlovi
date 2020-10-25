import Api from '@/services/Api';

export default {
    getAllJobs() {
        return Api().get('/get-jobs');
    },
    showSingleJob(jobId) {
        return Api().get(`/single-job/${jobId}`);
    },
    createJob(job) {
        return Api().post('/create-job', job);
    },
    updateSingleJob(job) {
        return Api().put(`/edit-job/${job._id}`, job);
    }
}