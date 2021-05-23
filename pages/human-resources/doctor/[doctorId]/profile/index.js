import { useRouter } from "next/router";
import { useEffect } from "react";
import DoctorDetail from "../../../../../src/components/DoctorDetail/DoctorDetail";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";
import { useSingleDoctorDetail } from "../../../../../src/hooks/doctorHooks";

function HumanResourcesDoctorProfile() {

  const router = useRouter();
  const { doctorId } = router.query;

  const { data, isLoading, isError, setDoctorId } = useSingleDoctorDetail();

  useEffect(() => {
    setDoctorId(doctorId);
  }, [])


  return (
      <DoctorDetail doctor={data && data.data} isLoading={isLoading} isError={isError} />
  )
}

export default protectRoute(defaultPage(HumanResourcesDoctorProfile))