import ShiftTable from "../../../src/components/ShiftTable"
import { defaultPage } from "../../../src/hocs/defaultPage"

function SchedulerShiftPage() {

  return (
    <ShiftTable />
  )
}

export default defaultPage(SchedulerShiftPage)