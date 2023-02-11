import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function ReviewSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  const reviews = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Muhammad Azad",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delenitiEligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, deleniti Eligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Muhammad Azad",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delenitiEligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, deleniti Eligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Muhammad Azad",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delenitiEligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, deleniti Eligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Muhammad Azad",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delenitiEligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, deleniti Eligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Muhammad Azad",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delenitiEligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, deleniti Eligendi cumque numquam et natus in! Nisi temporibus alias molestias aperiam,totam dolor magnam rerum laudantium dignissimos quae necessitatibus officia!",
    },
  ];
  return (
    <div className="bg-gray-100 pt-20">
      <Slider {...settings}>
        {reviews.map((review) => {
          return (
            <div key={review.id} className="flex  justify-between p-6 m-6">
              <div className="w-1/3 flex flex-col items-center">
                {" "}
                <img
                  src={review.img}
                  alt="person"
                  className="h-60 w-60 object-contain"
                />
                <p className="h-1/5 text-center">{review.name}</p>
              </div>
              <p className="w-2/3">{review.content}</p>
            </div>
          );
        })}
      </Slider>
      {/* {reviews.map((review) => {
        return (
          <div className="flex  justify-between p-6 m-6">
            <div className="w-1/3 flex flex-col items-center">
              {" "}
              <img
                src={review.img}
                alt="person"
                className="h-60 w-60 object-contain"
              />
              <p className="h-1/5 text-center">{review.name}</p>
            </div>
            <p className="w-2/3">{review.content}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default ReviewSection;
