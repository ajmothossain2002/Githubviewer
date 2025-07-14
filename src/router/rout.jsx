import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Loader } from "../loader/loader";



const Navbar = lazy(() => import("../sharemodule/Header/navbar"));
const Footer = lazy(() => import("../sharemodule/footer/footer"));
const Blog = lazy(() => import("../component/blog"));
const About = lazy(() => import("../component/about"));
const Home = lazy(() => import("../component/Home"));

export default function Rout() {
  return (
    <Router>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'url(/bg.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Suspense fallback={<Loader/>}>
          <Navbar />

          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>

          <Footer />
        </Suspense>
      </Box>
    </Router>
  );
}
