import React from "react";
import Title from "../../../../Components/Title/Title";
import NewsItem from "./(components)/NewsItem/NewsItem";

const News = () => {
  return (
    <div className="h-screen">
      <Title text="What's News Today?" />
      <div className="mt-3">
        <NewsItem />
      </div>
    </div>
  );
};

export default News;
