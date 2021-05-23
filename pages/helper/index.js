import { defaultPage } from "../../src/hocs/defaultPage"
import { protectRoute } from "../../src/hocs/protectRoute"

function HelperPage() {

  return (
    <div>
      Helper page
    </div>
  )
}

export default protectRoute(defaultPage(HelperPage))