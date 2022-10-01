export interface IArticles {
  id?: number;
  featured?: boolean;
  title?: string;
  url?: string;
  imageUrl?: string;
  newsSite?: string;
  summary?: string;
  publishedAt?: string;
  updatedAt?: string;
  launches?: ILaunch[];
  events?: IEvent[];
}

export interface IBlogs {
  id?: number;
  title?: string;
  url?: string;
  featured?: boolean;
  imageUrl?: string;
  newsSite?: string;
  summary?: string;
  publishedAt?: string;
  updatedAt?: string;
  launches?: ILaunch[];
  events?: IEvent[];
}

interface ILaunch {
  id?: string;
  provider?: string;
}

interface IEvent {
  id?: string;
  provider?: string;
}

export interface IOption {
  value: string;
  label: string;
}
