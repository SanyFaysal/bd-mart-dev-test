import Head from "next/head";
import Banner from "../components/HomePage/Banner/Banner";
import BestSelling from "../components/HomePage/BestSelling/BestSelling";
import LandingImage from "../components/HomePage/LandingImage/LandingImage";
import ShopDepartments from "../components/HomePage/Department/ShopDepartments";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <LandingImage></LandingImage>
      <BestSelling></BestSelling>
      <ShopDepartments />
    </Layout>
  );
}
