import { fetchArticlesPage, fetchSortArticlesPage } from "app/feautures";
import { fetchBlogsPage, fetchSortBlogsPage } from "app/feautures";
import { useAppDispatch } from "app/hooks";
import { useEffect, useState } from "react";
import {
  ButtonPage,
  CurrentButton,
  CurrentPageItem,
  FirstPageItem,
  PageList,
  SecondPageItem,
  StyledPagination,
} from "./styles";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({ page: 0, current: 1 });

  const handleCurrentPage = () => {
    setRequestParams({
      page: requestParams.page,
      current: requestParams.current,
    });
  };

  const handleFirst = () => {
    setRequestParams({
      page: requestParams.page - 12,
      current: requestParams.current - 1,
    });
  };

  const handleSecond = () => {
    setRequestParams({
      page: requestParams.page + 12,
      current: requestParams.current + 1,
    });
  };

  useEffect(() => {
    dispatch(fetchArticlesPage(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchSortArticlesPage(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchBlogsPage(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchSortBlogsPage(requestParams.page));
  }, [dispatch, requestParams]);

  return (
    <StyledPagination>
      <PageList>
        <FirstPageItem current={requestParams.current}>
          <ButtonPage onClick={handleFirst}>{requestParams.current - 1}</ButtonPage>
        </FirstPageItem>
        <CurrentPageItem>
          <CurrentButton onClick={handleCurrentPage}>{requestParams.current}</CurrentButton>
        </CurrentPageItem>
        <SecondPageItem current={requestParams.current}>
          <ButtonPage onClick={handleSecond}>{requestParams.current + 1}</ButtonPage>
        </SecondPageItem>
      </PageList>
    </StyledPagination>
  );
};
