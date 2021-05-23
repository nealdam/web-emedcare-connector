import { defaultPage } from "../../src/hocs/defaultPage"
import { protectRoute } from "../../src/hocs/protectRoute"

function HumanResourcesPage() {


  return (
    <div>Human Resources Page</div>
  )
}

export default protectRoute(defaultPage(HumanResourcesPage))