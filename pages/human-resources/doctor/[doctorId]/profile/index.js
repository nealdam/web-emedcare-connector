import DoctorDetail from "../../../../../src/components/DoctorDetail/DoctorDetail";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";

function HumanResourcesDoctorProfile() {


  return (
    <div>
      <DoctorDetail />
    </div>
  )
}

export default protectRoute(defaultPage(HumanResourcesDoctorProfile))