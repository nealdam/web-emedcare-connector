import NurseDetail from "../../../../../src/components/NurseDetail"
import { defaultPage } from "../../../../../src/hocs/defaultPage"
import { protectRoute } from "../../../../../src/hocs/protectRoute"

function HumanResourcesNurseProfilePage() {

  return (
    <div>
      <NurseDetail />
    </div>
  )
}

export default protectRoute(defaultPage(HumanResourcesNurseProfilePage))