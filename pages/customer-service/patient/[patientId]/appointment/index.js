import PatientAppointmentTable from "../../../../../src/components/PatientAppointmentTable"
import { defaultPage } from "../../../../../src/hocs/defaultPage"

function CustomerServicePatientAppointmentPage() {

  return (
    <div>
      <PatientAppointmentTable />
    </div>
  )
}

export default defaultPage(CustomerServicePatientAppointmentPage);