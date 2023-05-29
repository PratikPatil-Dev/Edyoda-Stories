"use client";

import Footer from "./Components/Footer/Footer";
import LatestPost from "./Components/LatestPost/LatestPost";
import Navbar from "./Components/Navbar/Navbar";
import Posts from "./Components/Posts/Posts";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#f2f6ff" }}>
      <Navbar />
      <LatestPost />
      <Posts />
      <Footer />
    </main>
  );
}
