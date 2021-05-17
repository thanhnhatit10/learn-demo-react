import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Thay Lời Muốn Nói: Mùa Hạ Cuối Cùng",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/f/c/5/3fc57b7ab2f2fc327c67815152da4b1a.jpg",
        },
        {
            id: 2,
            name: "Thay Lời Muốn Nói: Hạnh Phúc Nơi Đây",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/d/d/2/cdd28e13d52f9205944ed0495da63777.jpg"
        },
        {
            id: 3,
            name: "HIT-MAKER: Dương Khắc Linh",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/2/5/b/025b90ac0cc08a4e083fb6c9b517dc32.jpg"
        },
        {
            id: 4,
            name: "Mixtape Đừng Ai Nhắc Về Anh Ấy",
            thumbnaiUrl: "https://photo-playlist-zmp3.zadn.vn/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzgmDX01mH1tspPsrWD1a6BC8-B0bfI5T1csuXINWP5Wp29YW8801FNVu7D00H6GTmqmuGp3ar4zpBKo7r9N0cxTSNK91i1JRjrtO8pIGuTvN7IqMrC0Ko_T8Y1FXq5JUXqsD8w5G1FiXFQrJj_1qYp4D_VBID45hzMZTHcOGqbf561us0gK6-p7CsaSJO9R-vRpQHgOq8pub-UgsSm4p7YM9glCJWKO-1HdgnWEnOrj0QVn3LgH5Em0PhCDcrV2FPJbefaVXXSe0N9qDJCmyNF-qzBFik4g-PprQer2cZbFjAZ2k3ZQ4Ng7lh9TcLb7hPPh8eqVG&cv=1&size=thumb/240_240"
        },
        {
            id: 5,
            name: "Mixtape Cho Anh Xin Thêm 1 Phút",
            thumbnaiUrl: "https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDyymDf0LGGGtsZRZWi9LKQ9DTgDNGW96uvfX8HO1mfFt3tLrGXI34-09OsHLrvA7OjkpzXaL44Oe6ZOb2eJK5NiBydKFbb7LUiloDGv4qOUlYoPWMeK4H-xVilNRKGP6-Wibz4vJKyUkYt7Y2GUN46sQvM3RrmLSgricRHf5qWukY7LytXN37Bn8ONp9rTSPFLeXgbq10mrfJY6-7DMNpVnQTMe90WAOgrZX_zu0q8xk3sBkIeG1M_kQzJZ7LfGRUnjq-C4NLPju6n-QJqLfEVT98pp6LzBVzr_qBHFEZ9z&cv=1&size=thumb/240_240"
        },
    ];
    return (
        <div>
            <h3>Danh sách nhạc yêu thích</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;