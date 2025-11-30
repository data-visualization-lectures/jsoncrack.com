import React from "react";
import { NextSeo } from "next-seo";
import { SEO } from "../constants/seo";
import { Features } from "../layout/Landing/Features";
import { HeroPreview } from "../layout/Landing/HeroPreview";
import { HeroSection } from "../layout/Landing/HeroSection";
import { Section1 } from "../layout/Landing/Section1";
import { Section2 } from "../layout/Landing/Section2";
import { Section3 } from "../layout/Landing/Section3";
import Layout from "../layout/PageLayout";

export const HomePage = () => {
  return (
    <Layout>
      <NextSeo {...SEO} canonical="https://jsoncrack.dataviz.jp" />
      <HeroSection />
      <HeroPreview />
      <Section1 />
      <Section2 />
      <Section3 />
      <Features />
    </Layout>
  );
};

export default HomePage;
