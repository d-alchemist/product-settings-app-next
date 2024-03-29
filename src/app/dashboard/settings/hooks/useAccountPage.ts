import { IMAGES, formFeedback } from "@/utils/constants";
import { useFormik } from "formik";
import * as yup from "yup";
import { useCallback, useRef, useState } from "react";
import { getBase64FromImage } from "@/utils/helpers";
import { AxiosError, AxiosResponse } from "axios";
import { apiRoutes, axiosInstance } from "@/api";
import { ToastId, useToast } from "@chakra-ui/react";
import { OrgData } from "@/types";

export default function useAccountPage({ orgData }: { orgData: OrgData }) {
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const toast = useToast();
  const toastIdRef = useRef<ToastId>();

  const onImageUpload = async (image: File) => {
    const data = (await getBase64FromImage(image)) as string;
    setUploadedImage(data);
  };

  const validationSchema = yup.object({
    emailAddress: yup
      .string()
      .email(formFeedback.invalidEmail)
      .required(formFeedback.required),
    companyName: yup.string().required(formFeedback.required),
    contactName: yup.string().required(formFeedback.required),
    industry: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      companyName: orgData?.display_name,
      contactName: orgData?.profile.contact_name,
      emailAddress: orgData?.profile.contact_email,
      industry: orgData?.profile.industry,
    },
    onSubmit: async (data) => {
      let companyLogo = orgData?.profile.company_logo;
      if (uploadedImage) {
        companyLogo = uploadedImage;
      }

      toastIdRef.current = toast({
        status: "loading",
        description: "Submitting",
      });

      try {
        const result: AxiosResponse<OrgData> = await axiosInstance.put(
          apiRoutes.updateOrg,
          {
            company_logo_b64: companyLogo,
            contact_email: data.emailAddress,
            contact_name: data.contactName,
            display_name: data.companyName,
            industry: data.industry,
          },
        );

        if (result.status === 200) {
          if (toastIdRef.current) {
            toast.update(toastIdRef.current, {
              status: "success",
              description: "Updated successfully",
            });
          }
        }
      } catch (err) {
        const error = err as AxiosError<unknown>;
        if (!toastIdRef.current) {
          toast.update(toastIdRef.current, {
            status: "error",
            description: error?.message,
          });
        }
        toast.update(toastIdRef.current, {
          status: "error",
          description: error?.message,
        });
      }
    },
    validationSchema,
  });

  const showCompanyLogo = useCallback(() => {
    let logo: string = "";
    const initialLogo = orgData?.profile.company_logo;
    const sampleLogo = IMAGES.companyLogo;

    logo = initialLogo ? initialLogo : sampleLogo;

    if (uploadedImage) {
      logo = uploadedImage;
    }

    return logo;
  }, [orgData?.profile.company_logo, uploadedImage]);

  return { orgData, formik, showCompanyLogo, onImageUpload, toast };
}
