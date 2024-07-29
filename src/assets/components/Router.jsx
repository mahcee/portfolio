import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";

import Nav from "../src/assets/components/Nav";
import Skills from "../src/assets/components/Skills";
import Projects from "../src/assets/components/Projects";
import About from "../src/assets/components/About";
import Contact from "../src/assets/components/Contact";
import Footer from "../src/assets/components/Footer";
import Hero from "../src/assets/components/Hero";




function Router() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout >
              <Home  />
            </Layout>
          }
        />
           <Route
          path="/about"
          element={
            <Layout >
              <About  />
            </Layout>
          }
        />   <Route
        path="/projects"
        element={
          <Layout >
            < Projects />
          </Layout>
        }
      />   <Route
      path="/skills"
      element={
        <Layout >
        <Skills />
        </Layout>
      }
    />
      <Route
      path="/contact"
      element={
        <Layout >
        <Contact />
        </Layout>
      }
    />
        <Route path="*" element={<NotFound />} />
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
