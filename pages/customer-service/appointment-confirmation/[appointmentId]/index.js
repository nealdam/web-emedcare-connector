import { useRouter } from "next/router";
import { protectRoute } from "../../../../src/hocs/protectRoute";
import { defaultPage } from "../../../../src/hocs/defaultPage";
import { useSingleAppointmentDetail } from "../../../../src/hooks/appointmentHooks";
import { useEffect } from "react";
import AppointmentDetail from "../../../../src/components/AppointmentDetail";
import Section from "../../../../src/components/Section";
import { Button, makeStyles } from "@material-ui/core";
import { useTranslation } from "../../../../src/i18n";
import AppointmentAction from "../../../../src/components/AppointmentAction/AppointmentAction";
import { GET_APPOINTMENT_URL } from "../../../../src/constants/url";
import useAuthContext from "../../../../src/contexts/authContext";
import { useSnackbar } from "notistack";
import { successNotify } from "../../../../src/constants/notistackVariants";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
  },
}));

function ConfirmAppointmentDetailPage() {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();
  const { appointmentId } = router.query;
  const { loggedInUser } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const {
    data,
    isLoading,
    isError,
    setAppointmentId,
  } = useSingleAppointmentDetail();

  useEffect(() => {
    setAppointmentId(appointmentId);
  }, [appointmentId]);

  const handleConfirm = () => {
    const url = GET_APPOINTMENT_URL + "/" + appointmentId + "/confirm";

    fetch(url, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + loggedInUser.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.code == 200) {
          enqueueSnackbar(t("Confirm appointment success"), successNotify);
          router.back();
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        enqueueSnackbar(t("Error during confirm appointment: " + error));
        console.error(error);
      });
  };

  return (
    <>
      <AppointmentAction handleConfirm={handleConfirm} />
      <AppointmentDetail
        appointment={data}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default protectRoute(defaultPage(ConfirmAppointmentDetailPage));
