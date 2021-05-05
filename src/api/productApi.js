import axiosClient from './axiosClient';

const productApi = {
    // Truy van nhu trang bao nhieu, co bao nhieu item, search, filter,
    getAll(params) {
        const url = '/products';
        return axiosClient.get(url, {params: params});
    },
    // Truy van mot cai category

    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    // Tạo mới một category item
    add(data){
        const url = '/products';
        return axiosClient.post(url, data);
    },
    update(data){
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
};

export default productApi;