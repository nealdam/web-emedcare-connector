import { Fragment } from "react";
import { useState } from "react";
import AccountLinkingRequestTable from "../../../src/components/AccountLinkingRequestTable";
import AccountLinkingRequestDetailDialog from "../../../src/components/AccountLinkingRequestTable/AccountLinkingRequestDetailDialog";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useSinglePatient } from "../../../src/hooks/patientHooks";
import { useSingleUser, useUserRelatedPatientByUserNamePhoneNumber } from "../../../src/hooks/userHooks";

function AccountLinkingPage() {
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [userId, setUserId] = useState();
  const [patientId, setPatientId] = useState();

  const {
    profiles,
    isLoading,
    isError,
    setUserNamePhoneNumber,
  } = useUserRelatedPatientByUserNamePhoneNumber();

  const { data: account, isLoading: isAccountLoading, isError: isAccountError } = useSingleUser(userId);
  const { data: patient, isLoading: isPatientLoading, isError: isPatientError } = useSinglePatient(patientId);

  const handleClickDetail = (userId, patientId) => {
    setUserId(userId);
    setPatientId(patientId);
    setIsDetailDialogOpen(true);
  };

  const handleFind = (searchText) => {
    setUserNamePhoneNumber(searchText);
  };

  const handleLink = () => {

  }

  return (
    <Fragment>
      <AccountLinkingRequestTable
        profiles={profiles}
        isLoading={isLoading}
        isError={isError}
        handleSearch={handleFind}
        handleClickDetail={handleClickDetail}
      />
      <AccountLinkingRequestDetailDialog
        isOpen={isDetailDialogOpen}
        isLoading={!isAccountLoading && !isPatientLoading}
        isError={isAccountError || isPatientError}
        handleClose={() => setIsDetailDialogOpen(false)}
        account={account}
        patient={patient}
        handleLink={() => {return}}
      />
    </Fragment>
  );
}

export default protectRoute(defaultPage(AccountLinkingPage));
