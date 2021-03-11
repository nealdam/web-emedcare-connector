import { useRouter } from "next/router";
import { protectRoute } from "../../../../src/hocs/protectRoute";
import { defaultPage } from "../../../../src/hocs/defaultPage";
import { useSingleAppointmentDetail } from "../../../../src/hooks/appointmentHooks";
import { useEffect } from "react";
import AppointmentDetail from "../../../../src/components/AppointmentDetail";
import Section from "../../../../src/components/Section";
import { Button, makeStyles } from "@material-ui/core";
import { useTranslation } from "../../../../src/i18n";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
  }
}))

function ConfirmAppointmentDetailPage() {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();
  const { appointmentId } = router.query;

  const {
    data,
    isLoading,
    isError,
    setAppointmentId,
  } = useSingleAppointmentDetail();

  useEffect(() => {
    setAppointmentId(appointmentId);
  }, [appointmentId]);

  return (
    <>
      <Button className={classes.button} fullWidth variant="contained" color="primary">{t("Confirm")}</Button>
      <AppointmentDetail
        appointment={data}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default protectRoute(defaultPage(ConfirmAppointmentDetailPage));
