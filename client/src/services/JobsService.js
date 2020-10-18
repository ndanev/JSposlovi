import Api from '@/services/Api';

export default {
    getAllJobs() {
        return Api().get('/get-jobs');
    }
}