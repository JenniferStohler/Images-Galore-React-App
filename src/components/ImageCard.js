import React from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const ImageCard = ({ image }) => {

  const tags = image.tags.split(',');
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={image.webformatURL} alt="" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2" />
      Photo by {image.user}
    </div>
    <div className="px-6 py-4">
      <AiOutlineEye />: {image.views}
      <AiOutlineDownload />: {image.downloads}
     <AiOutlineLike />: {image.likes}
       
    </div>
    <div className="px-6 py-4">
        {tags.map((tag, index) =>
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-color-gray-700 mr-2">
       #{tag}
      </span>
        )}
  
      </div>
  </div>
  )
}

export default ImageCard;
