import ShiftDetail from "../../../../../src/components/ShiftDetail"
import { defaultPage } from "../../../../../src/hocs/defaultPage"

function SchedulerScheduleShiftDetailPage() {



  return (
    <div>
      <ShiftDetail />
    </div>
  )
}

export default defaultPage(SchedulerScheduleShiftDetailPage)