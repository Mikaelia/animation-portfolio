import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import { ResumePage } from "./pages/ResumePage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { NoMatchPage } from "./pages/NoMatchPage";
import { PotPage } from "./pages/Rive/ProjectPotPage";
import { ProjectSwordPage } from "./pages/CSS/ProjectSwordPage";
import { ProjectBallPage } from "./pages/CSS/ProjectBallPage";
import { ProjectToucanPage } from "./pages/CSS/ProjectToucanPage";
import { ProjectMagicSkyPage } from "./pages/JS/ProjectMagicSkyPage";
import { ProjectWaterPage } from "./pages/Rive/ProjectWaterPage";
import { ProjectSharkSubPage } from "./pages/Rive/ProjectSharkSubPage";
import { ProjectSanFranciscoPage } from "./pages/Rive/ProjectSanFranciscoPage";
import { ProjectBlackbirdPage } from "./pages/Rive/ProjectBlackbirdPage.tsx";
import { ProjectTextHoverUp } from "./pages/UI/ProjectTextHoverUp.tsx";
import { ProjectTextHoverFlip } from "./pages/UI/ProjectTextHoverFlip.tsx";
import { ProjectMirroredPage } from "./pages/UI/ProjectMirroredPage.tsx";
import { ProjectFloatingBoxesPage } from "./pages/JS/ProjectFloatingBoxesPage.tsx";
import { ProjectGooeyPage } from "./pages/UI/ProjectGooeyPage.tsx";
import { ProjectSmileyPage } from "./pages/CSS/ProjectSmileyPage.tsx";
import { ProjectFileExplorerPage } from "./pages/UI/ProjectFileExplorerPage.tsx";
import { ProjectAnimatedTooltipPage } from "@/pages/UI/ProjectAnimatedTooltipPage.tsx";
import { ProjectGlowyClipPage } from "@/pages/UI/ProjectGlowyClipPage.tsx";
import { ProjectExploreButtonPage } from "@/pages/Rive/ProjectExploreButtonPage.tsx";
import { Suspense } from "react";
import { Loading } from "@/pages/LoadingPage.tsx";
import BlogPostPage from "@/pages/BlogPostPage.tsx";
import { usePosts } from "@/contexts/PostsContext.tsx";
import { BlogListPage } from "@/pages/BlogListPage.tsx";
import { LenisProvider } from "@/contexts/LenisContext.tsx";

function App() {
  const posts = usePosts();

  return (
    <Suspense fallback={<Loading />}>
      <LenisProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/blog-list" element={<BlogListPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route index element={<HomePage />} />
            {/* Tmp fix as Rive doesn't seem to play well with dynamic imports */}
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
            <Route path="ui/glowy-clip" element={<ProjectGlowyClipPage />} />
            <Route path="ui/text-hover-up" element={<ProjectTextHoverUp />} />
            <Route path="ui/header-mirror" element={<ProjectMirroredPage />} />
            <Route
              path="ui/text-hover-flip"
              element={<ProjectTextHoverFlip />}
            />
            <Route
              path="ui/animated-tooltip"
              element={<ProjectAnimatedTooltipPage />}
            />
            <Route path="ui/gooey-nav" element={<ProjectGooeyPage />} />
            <Route
              path="animation/js/magic-sky"
              element={<ProjectMagicSkyPage />}
            />
            <Route
              path="animation/js/canvas-floating-boxes"
              element={<ProjectFloatingBoxesPage />}
            />
            <Route
              path="ui/file-explorer"
              element={<ProjectFileExplorerPage />}
            />
            <Route
              path="ui/explore-button"
              element={<ProjectExploreButtonPage />}
            />

            {posts.map((post) => (
              <Route
                key={post.path}
                path={post.path}
                element={<BlogPostPage post={post} />}
              />
            ))}

            <Route path="*" element={<NoMatchPage />} />
          </Route>
        </Routes>
      </LenisProvider>
    </Suspense>
  );
}

export default App;
