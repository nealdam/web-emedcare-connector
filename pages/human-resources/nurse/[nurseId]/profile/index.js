import NurseDetail from "../../../../../src/components/NurseDetail"
import { defaultPage } from "../../../../../src/hocs/defaultPage"

function HumanResourcesNurseProfilePage() {

  return (
    <div>
      <NurseDetail />
    </div>
  )
}

export default defaultPage(HumanResourcesNurseProfilePage)