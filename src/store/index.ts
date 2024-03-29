import { OrgData, UserData } from "@/types";
import { create } from "zustand";

interface GlobalState {
  users: UserData[];
  setUsers: (users: UserData[]) => void;
  orgData: OrgData | null;
  setOrgData: (orgData: OrgData) => void;
  submitting: boolean;
  setSubmitting: (submitting: boolean) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  users: [],
  setUsers: (users) => set(() => ({ users })),
  orgData: null,
  setOrgData: (orgData) => set(() => ({ orgData })),
  submitting: false,
  setSubmitting: (submitting) => set(() => ({ submitting })),
}));
