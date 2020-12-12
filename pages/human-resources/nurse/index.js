import NurseTable from "../../../src/components/NurseTable";
import { defaultPage } from "../../../src/hocs/defaultPage"

function HumanResourcesNursePage() {

  return (
    <NurseTable />
  )
}

export default defaultPage(HumanResourcesNursePage);