import React, { useState } from "react";
import Header from "../components/Header";
import ExploreProduct from "../components/ExploreProduct";
import SubProductDisplay from "../components/SubProductDisplay";
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreProduct category={category} setCategory={setCategory} />
      <SubProductDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
