import React, { Suspense } from "react";
import ValidateUser from "./component/ValidateUser";

export default function ValidateUserPage() {
  return (
    <Suspense>
      <ValidateUser />
    </Suspense>
  );
}
