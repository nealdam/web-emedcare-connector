import { useRouter } from "next/router";
import PatientProfile from "../../../../../src/components/PatientProfile";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";
import { usePatientDetail } from "../../../../../src/hooks/patientHooks";

function CustomerServicePatientProfilePage() {
  const router = useRouter();
  const { patientId } = router.query;

  const { data, isLoading, isError } = usePatientDetail(patientId);

  return (
    <div>
      <PatientProfile patient={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}

export default protectRoute(defaultPage(CustomerServicePatientProfilePage));
