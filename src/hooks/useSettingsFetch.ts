import { apiRoutes, axiosInstance } from "@/api";
import { useGlobalStore } from "@/store";
import { OrgData, UserData } from "@/types";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export default function useSettingsFetch() {
  const [setOrgData, setUsers] = useGlobalStore((state) => [
    state.setOrgData,
    state.setUsers,
  ]);

  const userDataPromise: Promise<AxiosResponse<UserData[]>> = axiosInstance.get(
    apiRoutes.userManagement,
  );
  const orgDataPromise: Promise<AxiosResponse<OrgData>> = axiosInstance.get(
    apiRoutes.orgManagement,
  );

  useEffect(() => {
    Promise.allSettled([userDataPromise, orgDataPromise])
      .then(async ([userData, orgData]) => {
        if (userData.status === "fulfilled") {
          const userResponse = userData as PromiseFulfilledResult<
            AxiosResponse<UserData[]>
          >;
          setUsers(userResponse.value.data);
        }
        if (orgData.status === "fulfilled") {
          const orgResponse = orgData as PromiseFulfilledResult<
            AxiosResponse<OrgData>
          >;
          setOrgData(orgResponse.value.data);
        }
      })
      .catch((errors: Array<PromiseRejectedResult>) => {
        // Handle errors if any
        errors.forEach((error) => {
          console.error("Error:", error.reason);
        });
      });
  }, []);
}
