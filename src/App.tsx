import { Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { NoMatchPage } from "./pages/NoMatchPage";
import { PotPage } from "./pages/ProjectPotPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* // Tmp fix as Rive doesn't seem to play well with dynamic imports */}
          <Route path="projects/bubbling-pot" element={<PotPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
