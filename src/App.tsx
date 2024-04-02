import { Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { NoMatchPage } from "./pages/NoMatchPage";
import { PotPage } from "./pages/ProjectPotPage";
import { ProjectSwordPage } from "./pages/ProjectSwordPage";
import { ProjectBallPage } from "./pages/ProjectBallPage";
import { ProjectToucanPage } from "./pages/ProjectToucanPage";
import { ProjectMagicSkyPage } from "./pages/ProjectMagicSkyPage";
import { ProjectWaterPage } from "./pages/ProjectWaterPage";
import { ProjectSharkSubPage } from "./pages/ProjectSharkSubPage";
import { ProjectSanFranciscoPage } from "./pages/ProjectSanFranciscoPage";
import { ProjectBlackbirdPage } from "@/pages/ProjectBlackbirdPage.tsx";
import { ProjectTextHoverUp } from "./pages/ProjectTextHoverUp.tsx";
import { ProjectFloatingBoxesPage } from "./pages/ProjectFloatingBoxesPage.tsx";
import { ProjectGooeyPage } from "@/pages/ProjectGooeyPage.tsx";
import { ProjectSmileyPage } from "@/pages/ProjectSmileyPage.tsx";
import { ProjectFileExplorerPage } from "@/pages/ProjectFileExplorerPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* // Tmp fix as Rive doesn't seem to play well with dynamic imports */}
          <Route path="animation/bubbling-pot" element={<PotPage />} />
          <Route path="animation/liquid" element={<ProjectWaterPage />} />
          <Route
            path="animation/undersea-socials"
            element={<ProjectSharkSubPage />}
          />
          <Route
            path="animation/san-francisco"
            element={<ProjectSanFranciscoPage />}
          />
          <Route
            path="animation/blackbird"
            element={<ProjectBlackbirdPage />}
          />
          <Route path="css/css-sword" element={<ProjectSwordPage />} />
          <Route path="css/css-green-ball" element={<ProjectBallPage />} />
          <Route path="css/css-toucan" element={<ProjectToucanPage />} />
          <Route path="css/css-smiley" element={<ProjectSmileyPage />} />
          <Route
            path="animation/css/text-hover-up"
            element={<ProjectTextHoverUp />}
          />
          <Route
            path="animation/css/gooey-nav"
            element={<ProjectGooeyPage />}
          />
          <Route
            path="animation/js/magic-sky"
            element={<ProjectMagicSkyPage />}
          />
          <Route
            path="animation/js/canvas-floating-boxes"
            element={<ProjectFloatingBoxesPage />}
          />
          <Route
            path="react/file-explorer"
            element={<ProjectFileExplorerPage />}
          />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
