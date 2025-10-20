import React from "react";
import "./ImageSlider.scss";

const imageUrls = [
  "https://m.media-amazon.com/images/I/51QbLKsX-eL._SS520_.jpg",
  "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8809977010546.png",
  "https://sitem.ssgcdn.com/05/48/31/item/1000049314805_i1_750.jpg",
  "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8804985433509.jpg",
  "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801007899923.jpg",
  "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8809977010539.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxxMv2RQSmvqT5rc30CzYNipz4Hcglab72w&s",
  "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801123309481.jpg",
  "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801308490089.jpg",
  "https://m.lowshop.net/web/product/big/202401/3e6ec65eb1cd5269b3b4c632edc46d55.jpg",
  "https://tqklhszfkvzk6518638.edge.naverncp.com/product/0071078700000.jpg",
  "https://m.lowshop.net/web/product/big/202401/3e6ec65eb1cd5269b3b4c632edc46d55.jpg",
  "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801045501895.jpg",
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTncxEfqBLX9hYkqbz_gx9kYjp8XYC4emZ0mxEeyUeXB7v8pttEpj2nLiozjD_FwSff_Bhf3KzbChFLhz1HAxJX1R1mQ3qLcljIi5P9G_FcC5R7uoXkfdKkotmsz8xHSLVtaeCB3Dg&usqp=CAc",
  "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/00c0/bdfd1bfc3bcb57a673cef5e8509668365329333177ac0dad335934b677b9.jpg",
  "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801007034980.JPG",
  "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801007280417.JPG",
  "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801019505225.JPG",
  "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801066062979.JPG",
  "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801104665506_002.jpg",
  "https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220225152621_e72489032b1a494d915fa9da64e2d318.jpg",
];

const ImageSlider = () => {
  const duplicatedImages = [...imageUrls, ...imageUrls];

  return (
    <div className="slider-container">
      <div className="slider-track">
        {duplicatedImages.map((url, index) => (
          <div key={index} className="slider-item">
            <img src={url} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
