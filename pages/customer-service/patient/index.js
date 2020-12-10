import PatientTable from "../../../src/components/PatientTable"
import { defaultPage } from "../../../src/hocs/defaultPage"

function CustomerServicePatientPage() {

  return (
    <div>
      <PatientTable />
    </div>
  )
}

export default defaultPage(CustomerServicePatientPage)