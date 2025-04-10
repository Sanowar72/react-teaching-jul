import React, { useEffect } from "react";

const Home = () => {
  const fetData = async () => {
    console.log("this is home page......");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetData();
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("component is getting unmount............");
    };
  }, []);

  return <div>Home</div>;
};

export default Home;
