import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns, data } from "./UserTableColumns";
import { useGlobalStore } from "@/store";
import SettingsContainer from "./SettingsContainer";
import AppTable from "@/app/components/AppTable";

export default function UserManagement() {
  const [users] = useGlobalStore((state) => [state.users]);

  // Remove the comment literals in line 12 to use the dummy data
  const table = useReactTable({
    // data,
    data: users,
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
