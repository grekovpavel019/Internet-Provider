export interface Column<T> {
    key: Extract<keyof T, string>;
    title: string;
}