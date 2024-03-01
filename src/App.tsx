import { Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { NoMatchPage } from "./pages/NoMatchPage";
import { PotPage } from "./pages/ProjectPotPage.jsx";
import { ProjectSwordPage } from "./pages/ProjectSwordPage.jsx";
import { ProjectBallPage } from "./pages/ProjectBallPage.jsx";
import { ProjectToucanPage } from "./pages/ProjectToucanPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* // Tmp fix as Rive doesn't seem to play well with dynamic imports */}
          <Route path="animation/bubbling-pot" element={<PotPage />} />
          <Route path="css/css-sword" element={<ProjectSwordPage />} />
          <Route path="css/css-green-ball" element={<ProjectBallPage />} />
          <Route path="css/css-toucan" element={<ProjectToucanPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
