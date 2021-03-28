import { useSnackbar } from "notistack";
import { Fragment } from "react";
import { useState } from "react";
import AccountLinkingRequestTable from "../../../src/components/AccountLinkingRequestTable";
import AccountLinkingRequestDetailDialog from "../../../src/components/AccountLinkingRequestTable/AccountLinkingRequestDetailDialog";
import { errorNotify, successNotify } from "../../../src/constants/notistackVariants";
import { GET_USER_URL } from "../../../src/constants/url";
import useAuthContext from "../../../src/contexts/authContext";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useSinglePatient } from "../../../src/hooks/patientHooks";
import {
  useSingleUser,
  useUserRelatedPatientByUserNamePhoneNumber,
} from "../../../src/hooks/userHooks";
import { useTranslation } from "../../../src/i18n";

function AccountLinkingPage() {
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [userId, setUserId] = useState();
  const [patientId, setPatientId] = useState();
  const [isOwner, setIsOwner] = useState(false);
  const { loggedInUser } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const {t} = useTranslation();

  const {
    profiles,
    isLoading,
    isError,
    setUserNamePhoneNumber,
  } = useUserRelatedPatientByUserNamePhoneNumber();

  const {
    data: account,
    isLoading: isAccountLoading,
    isError: isAccountError,
  } = useSingleUser(userId);
  const {
    data: patient,
    isLoading: isPatientLoading,
    isError: isPatientError,
  } = useSinglePatient(patientId);

  const handleClickDetail = (userId, patientId, isOwner) => {
    setUserId(userId);
    setPatientId(patientId);
    setIsOwner(isOwner);
    setIsDetailDialogOpen(true);
  };

  const handleFind = (searchText) => {
    setUserNamePhoneNumber(searchText);
  };

  const handleLink = () => {
    let url = GET_USER_URL + "/confirm-linking" + "?userId=" + account.id;

    url = isOwner ? url : (url + "&patientId=" + patient.id);

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + loggedInUser.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar(t("Linking account success"), successNotify);
        }
      })
      .catch((error) => {
        enqueueSnackbar(t("Error during linking account", errorNotify));
        console.error(error);
      })
      .finally(() => {
        setIsDetailDialogOpen(false);
      });
  };

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
        handleLink={handleLink}
      />
    </Fragment>
  );
}

export default protectRoute(defaultPage(AccountLinkingPage));
