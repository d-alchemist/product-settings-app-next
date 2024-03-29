import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns, data } from "./UserTableColumns";
import SettingsContainer from "./SettingsContainer";
import AppTable from "@/app/components/AppTable";
import { UserData } from "@/types";

export default function UserManagement({ userData }: { userData: UserData[] }) {
  // Remove the comment literals in line 12 to use the dummy data
  const table = useReactTable({
    // data,
    data: userData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <SettingsContainer title="All Users">
        <AppTable table={table} />
      </SettingsContainer>
    </>
  );
}
