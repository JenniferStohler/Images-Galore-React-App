import React from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={image.webformatURL} alt="" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2" />
      Photo by John Doe
    </div>
    <div className="px-6 py-4">
      <AiOutlineEye />: 400
      <AiOutlineDownload />:
          400
     <AiOutlineLike />:
          300
       
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-color-gray-700 mr-2">
        #tag1
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-color-gray-700 mr-2">
        #tag2
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-color-gray-700 mr-2">
        #tag3
      </span>
      </div>
  </div>
  )
}

export default ImageCard;
