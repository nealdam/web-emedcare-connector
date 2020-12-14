import DoctorDetail from "../../../../../src/components/DoctorDetail/DoctorDetail";
import { defaultPage } from "../../../../../src/hocs/defaultPage";

function HumanResourcesDoctorProfile() {


  return (
    <div>
      <DoctorDetail />
    </div>
  )
}

export default defaultPage(HumanResourcesDoctorProfile)