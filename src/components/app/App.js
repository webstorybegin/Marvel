import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import { MainPage } from "../mainPage/mainPage";
import { ComicsList } from "../comicsList/ComicsList";
import { SingleComicPage } from "../appHeader/SingleComicPage/SingleComicPage";
import { Page404 } from "../404/Page404";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/Marvel" element={<MainPage />} />
            <Route path="/comics" element={<ComicsList />} />
            <Route path="/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
