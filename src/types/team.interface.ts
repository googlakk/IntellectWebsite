export namespace TeamTypes {
    export interface ItemResponse {
        data: Item[]
        meta: Pagination
    }

    export interface Pagination {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }

    export interface Avatar {
        id: number;
        documentId: string;
        url: string;
    }

    export interface Item {
        id: number;
        documentId: string;
        first_name: string;
        last_name: string;
        role: string;
        avatar: Avatar;
    }

}
