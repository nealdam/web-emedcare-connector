import ShiftTable from "../../../src/components/ShiftTable"
import { defaultPage } from "../../../src/hocs/defaultPage"
import { protectRoute } from "../../../src/hocs/protectRoute"

function SchedulerShiftPage() {

  return (
    <ShiftTable />
  )
}

export default protectRoute(defaultPage(SchedulerShiftPage))