import React from "react";
import News from "./(components)/News/News";
import Schedule from "./(components)/Schedule/Schedule";
import Map from "./(components)/Map/Map";

const Home = () => {
  return (
    <div className="mt-36">
      <News />
      <Schedule />
      <Map />
    </div>
  );
};

export default Home;
