import { useRouter } from "next/router";
import PatientInfo from "../../../../../src/components/PatientInfo";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";
import { usePatientDetail } from "../../../../../src/hooks/patientHooks";

function CustomerServicePatientProfilePage() {
  const router = useRouter();
  const { patientId } = router.query;

  const { data, isLoading, isError } = usePatientDetail(patientId);

  return (
    <div>
      <PatientInfo patient={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}

export default protectRoute(defaultPage(CustomerServicePatientProfilePage));
