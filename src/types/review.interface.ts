export namespace ReviewTypes {
    export interface Item {
        id: number;
        documentId: string;
        title: string;
        description: string;
        parent_name: string;
        parent_info: string;
        stars: number;
        main_image: {
            url: string,
            documentId: string
        };
        avatar: {
            url: string,
            documentId: string
        };
        uri: string
    }
      
    export interface PaginationMeta {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }
      
    export interface Meta {
        pagination: PaginationMeta;
    }
      
    export interface ItemResponse {
        data: Item[];
        meta: Meta;
    }
      
}