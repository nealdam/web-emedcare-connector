import { useRouter } from "next/router";
import { Fragment } from "react";
import AppointmentAction from "../../../../src/components/AppointmentAction";
import AppointmentDetail from "../../../../src/components/AppointmentDetail/AppointmentDetail";
import { defaultPage } from "../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../src/hocs/protectRoute";
import {
  useSingleAppointmentDetail,
  useSingleAppointmentDetailById,
} from "../../../../src/hooks/appointmentHooks";

function CustomerServiceAppointmentDetailPage() {
  const router = useRouter();
  const { appointmentId } = router.query;

  const { data, isLoading, isError } = useSingleAppointmentDetailById(
    appointmentId
  );

  const handleConfirm = () => {};
  const handleFinish = () => {};
  const handleCancel = () => {};

  return (
    <Fragment>
      <AppointmentAction 
        handleConfirm={handleConfirm}
        handleFinish={handleFinish}
        handleCancel={handleCancel}
      />
      <AppointmentDetail
        appointment={data}
        isLoading={isLoading}
        isError={isError}
      />
    </Fragment>
  );
}

export default protectRoute(defaultPage(CustomerServiceAppointmentDetailPage));
