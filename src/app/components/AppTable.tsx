"use client";
import { UserData } from "@/types";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Table as TanstackTable, flexRender } from "@tanstack/react-table";

export default function AppTable({
  table,
}: {
  table: TanstackTable<UserData>;
}) {
  return (
    <TableContainer fontFamily="heading">
      <Table>
        <Thead>
          {table.getHeaderGroups()?.map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    fontSize="12"
                    fontWeight="normal"
                    color="#5C5E6E"
                    key={header.id}
                    px={header.id === "id" ? 0 : "auto"}
                    width={header.getSize() + "px"}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id} opacity={row.original.blocked ? 0.3 : 1}>
              {row.getVisibleCells().map((cell) => (
                <Td
                  key={cell.id}
                  borderTop="1px solid"
                  borderColor="#CACEE166"
                  py="6"
                  px={cell.id === "id" ? 0 : "auto"}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
