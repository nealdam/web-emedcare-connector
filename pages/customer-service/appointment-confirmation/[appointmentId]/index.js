import { useRouter } from "next/router";
import { protectRoute } from "../../../../src/hocs/protectRoute";
import { defaultPage } from "../../../../src/hocs/defaultPage";
import { useSingleAppointmentDetail } from "../../../../src/hooks/appointmentHooks";
import { useEffect } from "react";
import AppointmentDetail from "../../../../src/components/AppointmentDetail";

function ConfirmAppointmentDetailPage() {
  const router = useRouter();
  const { appointmentId } = router.query;

  const { data, isLoading, isError, setAppointmentId } = useSingleAppointmentDetail();

  useEffect(() => {
    setAppointmentId(appointmentId);
  }, [appointmentId]);

  return <AppointmentDetail appointment={data} isLoading={isLoading} isError={isError} />;
}

export default protectRoute(defaultPage(ConfirmAppointmentDetailPage));
