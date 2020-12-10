import PatientProfile from "../../../../../src/components/PatientProfile";
import { defaultPage } from "../../../../../src/hocs/defaultPage";

function CustomerSerivcePatientProfilePage() {


  return (
    <div>
      <PatientProfile />
    </div>
  )
}

export default defaultPage(CustomerSerivcePatientProfilePage);