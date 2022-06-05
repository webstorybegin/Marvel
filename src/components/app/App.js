import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppHeader } from "components/AppHeader";
import { Spinner } from "components/ui";

const Page404  = lazy(() => import('components/404/Page404'))
const MainPage = lazy(() => import('components/MainPage/MainPage'))
const ComicsList = lazy(() => import('components/ComicsList/ComicsList'));
const SingleComicPage = lazy(() => import('components/AppHeader/SingleComicPage/SingleComicPage'))

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/Marvel" element={<MainPage />} />
              <Route path="/comics" element={<ComicsList />} />
              <Route path="/comics/:comicId" element={<SingleComicPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
