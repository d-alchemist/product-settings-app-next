import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// setting up axios interceptors https://dev.to/charlintosh/setting-up-axios-interceptors-react-js-typescript-12k5

const onRequest = (
  config: InternalAxiosRequestConfig<any>,
): InternalAxiosRequestConfig<any> => {
  if (typeof window === "undefined") return config;
  const authorization = localStorage.getItem("accessToken") || "";
  if (!authorization) {
    window.location.href = "/";
  }
  config.headers.Authorization = `Bearer ${authorization}`;
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

export const axiosInstance = axios.create({
  baseURL: "https://api.stg.withrotate.com/api",
});

setupInterceptorsTo(axiosInstance);

export const apiRoutes = {
  userManagement: "/user_management/list_users",
  orgManagement: "/org_management/get_org_data",
  updateOrg: "/org_management/update_profile",
};
