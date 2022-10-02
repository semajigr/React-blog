import axios from "axios";
import { IArticles, IBlogs } from "../types";

enum Endpoint {
  ARTICLES = "articles",
  ARTICLES_COUNT = "articles/count",
  ARTICLES_ID = "articles/",
  ARTICLES_LIMIT = "articles?_limit=12",
  BLOG = "blogs",
  BLOG_COUNT = "blogs/count",
  BLOG_ID = "blogs/",
  BLOG_LIMIT = "blogs?_limit=12",
}

class SpaceFlightAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles() {
    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES_LIMIT);

    return data;
  }

  public async getAllBlogs() {
    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG_LIMIT);

    return data;
  }

  public async getArticleDetailsById(id: any) {
    const { data } = await this.API.get<IArticles>(`${Endpoint.ARTICLES_ID}${id}`);

    return data;
  }

  public async getBlogDetailsById(id: any) {
    const { data } = await this.API.get<IBlogs>(`${Endpoint.BLOG_ID}${id}`);

    return data;
  }

  public async getSelectArticles(value: string) {
    const params = {
      _sort: value,
    };

    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES_LIMIT, { params });

    return data;
  }

  public async getSelectBlogs(value: string) {
    const params = {
      _sort: value,
    };

    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG_LIMIT, { params });

    return data;
  }

  public async getSearchArticles(word: string) {
    const params = {
      title_contains: word,
    };

    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getSearchBlogs(word: string) {
    const params = {
      title_contains: word,
    };

    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG, { params });

    return data;
  }
}

export const spaceFlightAPI = new SpaceFlightAPI();
