import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseScreen from "./Screen/BaseScreen";
import LandingScreen from "./Screen/LandingScreen";
import LoginScreen from "./Screen/LoginScreen";
import AccountScreen from "./Screen/AccountScreen";
import ArticleScreen from "./Screen/ArticleScreen";
import ThemeScreen from "./Screen/ThemeScreen";
import TagScreen from "./Screen/TagScreen";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    // utiliser useEffect et useState pour effectuer une requette.
    fetch("http://blog-api/")
      .then((response) => response.text()) // affiche le texte récupérer
      .then((content) => setText(content));
  }, []);
  return (
    <div className="App">
      {text}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseScreen />}>
            <Route index element={<LandingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/accounts" element={<AccountScreen />} />
            <Route path="/articles" element={<ArticleScreen />} />
            <Route path="/tags" element={<TagScreen />} />
            <Route path="/themes" element={<ThemeScreen />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
