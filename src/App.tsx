import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequareAuth } from "./components";
import {
  ContentPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "./pages";
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
