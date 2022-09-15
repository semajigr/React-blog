import axios from "axios";
import { IArticles } from "../types";

enum Endpoint {
  ARTICLES = "articles",
  ARTICLES_COUNT = "articles/count",
  ARTICLES_ID = "articles/{id}",
  BLOG = "blogs",
  BLOG_COUNT = "blogs/count",
  BLOG_ID = "blogs/{id}",
}

class ArticleAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles() {
    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES);

    return data;
  }

  public async getAllBlogs() {
    const { data } = await this.API.get<IArticles[]>(Endpoint.BLOG);

    return data;
  }
}

export const articleAPI = new ArticleAPI();
