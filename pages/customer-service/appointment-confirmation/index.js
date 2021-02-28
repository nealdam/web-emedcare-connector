import { useRouter } from "next/router";
import useSWR from "swr";
import ConfirmAppointmentTable from "../../../src/components/ConfirmAppointmentTable";
import { GET_APPOINTMENT_URL } from "../../../src/constants/url";
import fetcher from "../../../src/fetcher";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";

function CustomerServiceAppointmentComfirmationPage() {
  const router = useRouter();
  
  let url = GET_APPOINTMENT_URL + "?is_confirmed=false";

  const { data, error } = useSWR(url, fetcher);

  const handleClickAppointmentDetail = (appointmentId) => {
    router.push(router.pathname + "/" + appointmentId);
  }

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <ConfirmAppointmentTable appointments={data} handleClickAppointmentDetail={handleClickAppointmentDetail} />;
}

export default protectRoute(
  defaultPage(CustomerServiceAppointmentComfirmationPage)
);
