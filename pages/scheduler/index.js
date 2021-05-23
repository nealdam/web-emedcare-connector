import { defaultPage } from "../../src/hocs/defaultPage"
import { protectRoute } from "../../src/hocs/protectRoute"

function SchedulerPage() {

  return (
    <div>Scheduler Page</div>
  )
}

export default protectRoute(defaultPage(SchedulerPage))