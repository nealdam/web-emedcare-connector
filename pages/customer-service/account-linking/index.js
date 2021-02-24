import { useState } from "react";
import AccountLinkingRequestTable from "../../../src/components/AccountLinkingRequestTable";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useUserRelatedPatientByUserNamePhoneNumber } from "../../../src/hooks/userHooks";

function AccountLinkingPage() {

  const { profiles, isLoading, isError, setUserNamePhoneNumber } = useUserRelatedPatientByUserNamePhoneNumber();

  const handleFind = (searchText) => {
    setUserNamePhoneNumber(searchText);
  }

  return (
    <AccountLinkingRequestTable profiles={profiles} isLoading={isLoading} isError={isError} handleSearch={handleFind} />
  )
}

export default protectRoute(defaultPage(AccountLinkingPage));