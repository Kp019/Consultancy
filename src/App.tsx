import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import { LoadingSpinner } from "./components/LoadingSpinner";

// Route-level code splitting
const Home = lazy(() =>
  import("./pages/home").then((module) => ({ default: module.Home }))
);
const Projects = lazy(() =>
  import("./pages/projects").then((module) => ({ default: module.Projects }))
);

function App() {
  return (
    <div className="w-full min-h-screen relative bg-[#fbfaf9]">
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
