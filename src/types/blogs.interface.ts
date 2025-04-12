export namespace BlogsTypes {
  export interface DataBlock {
    data: Item[];
    meta: Meta;
  }

  export interface Item {
    id: number;
    title: string;
    date: string;
    text: string;
    image: Image;
    documentId: string
  }

  export interface Image {
    id: number;
    url: string;
  }

  export interface Meta {
    pagination: Pagination;
  }

  export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
}
