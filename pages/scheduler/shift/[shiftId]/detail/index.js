import ShiftDetail from "../../../../../src/components/ShiftDetail"
import { defaultPage } from "../../../../../src/hocs/defaultPage"
import { protectRoute } from "../../../../../src/hocs/protectRoute"

function SchedulerScheduleShiftDetailPage() {



  return (
    <div>
      <ShiftDetail />
    </div>
  )
}

export default protectRoute(defaultPage(SchedulerScheduleShiftDetailPage))