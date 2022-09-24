import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequareAuth } from "./components";
import {
  Account,
  ArticleContentPage,
  BlogContentPage,
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
        <Route path={ROUTE.ARTICLE} element={<ArticleContentPage />} />
        <Route path={ROUTE.BLOG} element={<BlogContentPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.ACCOUNT} element={<Account />} />
        </Route>
      </Route>
    </Routes>
  );
};
