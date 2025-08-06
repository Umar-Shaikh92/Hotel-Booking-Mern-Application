import React from "react";
import "./home.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { Featured } from "../../components/Featured/Featured";
import { PropertyList } from "../../components/propertyList/PropertyList";
import { FeaturedProperties } from "../../components/FeaturedProperties/FeaturedProperties";
import { MailList } from "../../components/MailList/MailList";
import { Footer } from "../../components/Footer/Footer";

import { Mymap } from "../../components/Map/Map";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <Mymap mapStyle={{ width: '100%', height: '60vh', paddingTop: '30px' }} />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

