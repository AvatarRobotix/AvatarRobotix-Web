import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Projects from "./pages/Projects";
import NotFound from "./components/Universal/404Page";

// Lazy load these components for code splitting
// const AgriTeam = React.lazy(() => import("./pages/AgriTeam"));
// const MedicalTeam = React.lazy(() => import("./pages/MedicalTeam"));
// const Events = React.lazy(() => import("./pages/Events"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home Route */}
          <Route index element={<Home />} />

          {/* About Route */}
          <Route path="about" element={<About />} />

          {/* Service Route */}
          <Route path="service" element={<Service />} />

          {/* Projects Routes */}
          <Route path="projects" element={<Projects />} />
          {/* <Route path="projects/agri-team" element={<AgriTeam />} />
          <Route path="projects/medical-team" element={<MedicalTeam />} /> */}

          {/* Events Route */}
          {/* <Route path="events" element={<Events />} /> */}

          {/* Career Routes */}
          {/* <Route path="career/job" element={<Internship />} /> */}
          <Route path="career/internship" element={<Internship />} />

          {/* Our Team Route */}
          <Route path="ourteam" element={<OurTeam />} />

          {/* Contact Route */}
          <Route path="contact" element={<Contact />} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
