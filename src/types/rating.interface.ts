export namespace RatingTypes {
    export interface Item {
        id: number,
        title: string
        students: {id: number, average_mark: number, name: string, parallel: string, quarters: {id: number, q1: string, q2: string, q3: string, q4: string, q5: string}}[]
    }
}
