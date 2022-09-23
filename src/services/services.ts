import axios from "axios";
import { IArticles } from "../types";

enum Endpoint {
  ARTICLES = "articles",
  ARTICLES_COUNT = "articles/count",
  ARTICLES_ID = "articles/",
  BLOG = "blogs",
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
    const { data } = await this.API.get<IArticles[]>(Endpoint.BLOG);

    return data;
  }

  public async getDetailsById(id: any) {
    const { data } = await this.API.get<IArticles>(`articles/${id}`);

    return data;
  }
}

export const spaceFlightAPI = new SpaceFlightAPI();
