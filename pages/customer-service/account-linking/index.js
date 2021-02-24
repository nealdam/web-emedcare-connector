import { useState } from "react";
import AccountLinkingRequestTable from "../../../src/components/AccountLinkingRequestTable";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useUserRelatedPatientByUserNamePhoneNumber } from "../../../src/hooks/userHook";

function AccountLinkingPage() {

  const [userNamePhoneNumber, setUserNamePhoneNumber] = useState("");
  const { profiles, isLoading, isError } = useUserRelatedPatientByUserNamePhoneNumber(userNamePhoneNumber);

  const handleFind = (searchText) => {
    
  }

  return (
    <AccountLinkingRequestTable profiles={profiles} isLoading={isLoading} isError={isError} />
  )
}

export default protectRoute(defaultPage(AccountLinkingPage));