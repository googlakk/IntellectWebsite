export namespace EventTypes {
    export interface Event {
        id: number;
        documentId: string;
        title: string;
        time_start: string;
        time_end: string
        cabinet: string;
    };

    export interface Item {
        id: number;
        documentId: string;
        title: string;
        date: string
        events: Event[];
    };
}
