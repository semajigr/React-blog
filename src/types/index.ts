export type Theme = "dark" | "light";

export interface IArticles {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: [];
  events: [];
}
