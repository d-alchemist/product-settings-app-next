import { OrgData, UserData } from "@/types";
import { create } from "zustand";

interface GlobalState {
  userData: UserData[];
  setUsers: (userData: UserData[]) => void;
  orgData: OrgData | null;
  setOrgData: (orgData: OrgData) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  userData: [],
  setUsers: (userData) => set(() => ({ userData })),
  orgData: null,
  setOrgData: (orgData) => set(() => ({ orgData })),
}));
