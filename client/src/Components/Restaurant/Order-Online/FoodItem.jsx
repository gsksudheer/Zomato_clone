import React from 'react';
import ReactStars from "react-rating-stars-component";
import { BsPlus } from "react-icons/bs";

const FoodItem = (props) => {
    return (
        <>
          <div className="flex flex-row items-start justify-between gap-6 w-full">
              <div className="flex flex-row gap-4">
                <div className="w-46 h-46">
                    <img src={props.image} alt="Food" className="w-full h-full rounded-lg" />
                </div>
                <div className="truncate flex flex-col md:gap-1 w-full">
                        <h3 className="text-gray-900 text-lg font-semibold">{props.title}</h3>
                        <ReactStars count={5} value={props.rating} />
                        <h4 className="text-gray-900 md:text-lg  ">₹{props.price}</h4>
                        <p className="text-gray-400 w-80 md:w-96 truncate">{props.description}</p>
              </div> 
              </div>
                <div className="">
                    <button className="flex items-start gap-2 text-zred-400 bg-pink-50 pl-4 pr-1 py-1 border border-zred-400 rounded-lg">
                        Add <BsPlus />
                    </button>
                </div>
          </div> 
        </>
    );
};

export default FoodItem;
