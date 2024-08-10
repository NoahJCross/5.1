import React from "react";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Post from "./pages/Post/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
