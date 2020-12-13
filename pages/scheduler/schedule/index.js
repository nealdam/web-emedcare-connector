import ShiftTable from "../../../src/components/ShiftTable"
import { defaultPage } from "../../../src/hocs/defaultPage"

function SchedulerSchedulePage() {

  return (
    <ShiftTable />
  )
}

export default defaultPage(SchedulerSchedulePage)