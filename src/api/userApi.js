import axiosClient from './axiosClient';

const userApi = {
    // Tạo mới một category item
    register(data){
        const url = '/auth/local/register';
        return axiosClient.post(url, data);
    },
  
};

export default userApi;