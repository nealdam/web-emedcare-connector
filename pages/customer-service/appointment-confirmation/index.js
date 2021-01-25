import ConfirmAppointmentTable from "../../../src/components/ConfirmAppointmentTable"
import { defaultPage } from "../../../src/hocs/defaultPage"
import { protectRoute } from "../../../src/hocs/protectRoute"

function CustomerSerivceAppointmentComfirmationPage() {

  return (
    <div>
      <ConfirmAppointmentTable />
    </div>
  )
}

export default protectRoute(defaultPage(CustomerSerivceAppointmentComfirmationPage))