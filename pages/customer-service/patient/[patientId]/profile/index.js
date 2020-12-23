import PatientProfile from "../../../../../src/components/PatientProfile";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";

function CustomerSerivcePatientProfilePage() {


  return (
    <div>
      <PatientProfile />
    </div>
  )
}

export default protectRoute(defaultPage(CustomerSerivcePatientProfilePage));