import { useRouter } from "next/router";
import useSWR from "swr";
import ConfirmAppointmentTable from "../../../src/components/ConfirmAppointmentTable";
import { GET_APPOINTMENT_URL } from "../../../src/constants/url";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useUnconfirmedAppointment } from "../../../src/hooks/appointmentHooks";

function CustomerServiceAppointmentComfirmationPage() {
  const router = useRouter();
  const {
    data,
    paging,
    isLoading,
    isError,
    setOffset,
    setLimit,
  } = useUnconfirmedAppointment();

  const handleClickAppointmentDetail = (appointmentId) => {
    router.push(router.pathname + "/" + appointmentId);
  };

  return (
    <ConfirmAppointmentTable
      appointments={data}
      paging={paging}
      isLoading={isLoading}
      isError={isError}
      setOffset={setOffset}
      setLimit={setLimit}
      handleClickAppointmentDetail={handleClickAppointmentDetail}
    />
  );
}

export default protectRoute(
  defaultPage(CustomerServiceAppointmentComfirmationPage)
);
