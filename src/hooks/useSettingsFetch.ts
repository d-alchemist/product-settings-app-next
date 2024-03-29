import { apiRoutes, axiosInstance } from "@/api";
import { useGlobalStore } from "@/store";
import { OrgData, UserData } from "@/types";
import { useToast } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { useEffect, useRef } from "react";

export default function useSettingsFetch() {
  const [orgData, userData, setOrgData, setUsers] = useGlobalStore((state) => [
    state.orgData,
    state.userData,
    state.setOrgData,
    state.setUsers,
  ]);

  const toast = useToast();

  const userDataPromise: Promise<AxiosResponse<UserData[]>> = axiosInstance.get(
    apiRoutes.userManagement,
  );
  const orgDataPromise: Promise<AxiosResponse<OrgData>> = axiosInstance.get(
    apiRoutes.orgManagement,
  );

  const loadRef = useRef(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    if (loadRef.current) return;

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
          toast({
            status: "error",
            description: error.reason,
          });
        });
      });

      return () => {
        source.cancel();
        loadRef.current = true;
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { orgData, userData } as const;
}
