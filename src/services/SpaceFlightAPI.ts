import axios from "axios";
import { IArticles, IBlogs } from "../types";

enum Endpoint {
  ARTICLES = "articles",
  ARTICLES_ID = "articles/",
  BLOG = "blogs",
  BLOG_ID = "blogs/",
}

class SpaceFlightAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles() {
    const params = {
      _limit: 12,
    };

    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getAllBlogs() {
    const params = {
      _limit: 12,
    };
    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG, { params });

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
      _limit: 12,
    };

    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getSelectBlogs(value: string) {
    const params = {
      _sort: value,
      _limit: 12,
    };

    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG, { params });

    return data;
  }

  public async getSearchArticles(word: string) {
    const params = {
      _title_contains: word,
    };

    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getSearchBlogs(word: string) {
    const params = {
      _title_contains: word,
    };

    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG, { params });

    return data;
  }

  public async getArticlesSimilar(name: string) {
    const params = {
      _title_contains: name,
    };

    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getBlogsSimilar(name: string) {
    const params = {
      _title_contains: name,
    };

    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG, { params });

    return data;
  }

  public async getArticlesPage(page: number) {
    const params = {
      _start: page,
      _limit: 12,
    };

    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getSortArticlesPage(page: number) {
    const params = {
      _start: page,
      _limit: 12,
    };

    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getSortBlogsPage(page: number) {
    const params = {
      _start: page,
      _limit: 12,
    };

    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG, { params });

    return data;
  }

  public async getBlogsPage(page: number) {
    const params = {
      _start: page,
      _limit: 12,
    };

    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG, { params });

    return data;
  }
}

export const spaceFlightAPI = new SpaceFlightAPI();
