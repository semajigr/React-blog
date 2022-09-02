import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContentPage } from "./pages/ContentPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="search" element={<SearchPage />}></Route>
      <Route path="favorites" element={<FavoritesPage />}></Route>
      <Route path="sign-in" element={<SignInPage />}></Route>
      <Route path="sign-up" element={<SignUpPage />}></Route>
      <Route path="content" element={<ContentPage />}></Route>
    </Routes>
  );
};
