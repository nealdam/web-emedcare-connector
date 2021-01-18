import { defaultPage } from "../../../../src/hocs/defaultPage"
import { protectRoute } from "../../../../src/hocs/protectRoute"

function AddShiftPage() {


  return (
    <div>
      Add Shift Page
    </div>
  )
}

export default protectRoute(defaultPage(AddShiftPage))