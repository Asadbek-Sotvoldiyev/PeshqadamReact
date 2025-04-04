import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// fonts
import "../src/utils/fonts";
import { Spin } from "antd";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/homePage"));
const YonalishlarPage = lazy(() => import("./pages/yonalishlarPage"));
const YangiliklarPage = lazy(() => import("./pages/yangiliklarPage"));
const VideolarPage = lazy(() => import("./pages/videolarPage"));
const AloqaPage = lazy(() => import("./pages/aloqaPage"));
const YangiliklarSinglePage = lazy(() => import("./pages/yangiliklarSinglePage"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spin size="large" fullscreen className="text-primary" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yonalishlar" element={<YonalishlarPage />} />
          <Route path="/yangiliklar" element={<YangiliklarPage />} />
          <Route path="/yangiliklar/:id" element={<YangiliklarSinglePage />} />
          <Route path="/videolar" element={<VideolarPage />} />
          <Route path="/aloqa" element={<AloqaPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
