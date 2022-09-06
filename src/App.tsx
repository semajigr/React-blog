import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate/MainTemplate";
import { RequareAuth } from "./components/RequareAuth/RequareAuth";
import { ContentPage } from "./pages/ContentPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SearchPage } from "./pages/SearchPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { ROUTE } from "./routes";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.CONTENT} element={<ContentPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
