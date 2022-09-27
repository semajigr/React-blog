import axios from "axios";
import { IArticles, IBlogs } from "../types";

enum Endpoint {
  ARTICLES = "articles?_limit=12",
  ARTICLES_COUNT = "articles/count",
  ARTICLES_ID = "articles/",
  BLOG = "blogs?_limit=12",
  BLOG_COUNT = "blogs/count",
  BLOG_ID = "blogs/",
}

class SpaceFlightAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles() {
    const { data } = await this.API.get<IArticles[]>(Endpoint.ARTICLES);

    return data;
  }

  public async getAllBlogs() {
    const { data } = await this.API.get<IBlogs[]>(Endpoint.BLOG);

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
}

export const spaceFlightAPI = new SpaceFlightAPI();
