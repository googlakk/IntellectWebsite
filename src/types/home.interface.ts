export namespace HomeTypes {
    export interface MainImage {
        id: number;
        documentId: string;
        title: string;
        description: string;
        video: {
            id: number,
            url: string,
        }
    }

    export interface Invite {
        id: number;
        time: string;
        title: string;
        organizators: {name: string, role: string, image: {id: number,url: string,}}[]
    }

    export interface Gallery {
        id: number
        title: string,
        description: string
        images: {id: number, url: string}[]
    }

    export interface HighLights {
        id: number
        title: string,
        description: string,
        link: string
        statistikas: {id: string, title: string , text: string}[]
    }

    export interface Event {
        id: number;
        documentId: string;
        title: string;
        time_start: string;
        time_end: string
        cabinet: string;
    };

    export interface EventItem {
        id: number;
        documentId: string;
        title: string;
        date: string
        events: Event[];
    };

    export interface ReviewItem {
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

    export interface ReviewItemResponse {
        data: ReviewItem[];
        meta: Meta;
    }
}
