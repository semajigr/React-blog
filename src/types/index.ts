export interface IArticles {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: ILaunch[];
  events: IEvent[];
}

interface ILaunch {
  id: string;
  provider: string;
}

interface IEvent {
  id: string;
  provider: string;
}
