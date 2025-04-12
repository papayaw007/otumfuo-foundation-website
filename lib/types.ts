export interface IBoard {
  name: string;
  role: string;
  image: string;
}

export interface ITag {
  _id: string;
  name: string;
  slug: string;
}

export interface INewsList {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  date?: string;
  tags?: ITag[];
}

export interface INewsArticle {
  currentSlug: string;
  smallDescription: string;
  title: string;
  content: any;
  titleImage: any;
}
