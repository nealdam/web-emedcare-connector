import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { Fragment } from "react";
import AppointmentAction from "../../../../src/components/AppointmentAction";
import AppointmentDetail from "../../../../src/components/AppointmentDetail/AppointmentDetail";
import { errorNotify, successNotify } from "../../../../src/constants/notistackVariants";
import { GET_APPOINTMENT_URL } from "../../../../src/constants/url";
import useAuthContext from "../../../../src/contexts/authContext";
import { defaultPage } from "../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../src/hocs/protectRoute";
import {
  useSingleAppointmentDetail,
  useSingleAppointmentDetailById,
} from "../../../../src/hooks/appointmentHooks";
import { useTranslation } from "../../../../src/i18n";

function CustomerServiceAppointmentDetailPage() {
  const router = useRouter();
  const { appointmentId } = router.query;
  const { loggedInUser } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const { data, isLoading, isError } = useSingleAppointmentDetailById(
    appointmentId
  );

  // const handleConfirm = () => {};
  const handleFinish = () => {
    let url = GET_APPOINTMENT_URL + "/" + appointmentId + "/check-done"
    
    fetch (url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + loggedInUser.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar(t("Confirm appointment success"), successNotify);
        }
      })
      .catch((error) => {
        enqueueSnackbar(t("Error during confirm appointment", errorNotify));
        console.error(error);
      })
  };
  // const handleCancel = () => {};

  return (
    <Fragment>
      {/* <AppointmentAction 
        // handleConfirm={handleConfirm}
        handleFinish={handleFinish}
        // handleCancel={handleCancel}
      /> */}
      <AppointmentDetail
        appointment={data}
        isLoading={isLoading}
        isError={isError}
      />
    </Fragment>
  );
}

export default protectRoute(defaultPage(CustomerServiceAppointmentDetailPage));
