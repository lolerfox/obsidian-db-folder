import { Table } from "@tanstack/react-table";
import { RowDataType } from "cdm/FolderModel";

export type CellProps = {
    cell: any,
    column: any;
    row: any;
    table: Table<RowDataType>;
    [key: string]: any;
}