import { useRouter } from "next/router";
import NurseTable from "../../../src/components/NurseTable";
import { defaultPage } from "../../../src/hocs/defaultPage"

function HumanResourcesNursePage() {

  const route = useRouter();

  const handleClickNurseProfile = (nurseId) => {
    route.push(route.asPath + "/" + nurseId + "/profile");
  }
  

  return (
    <NurseTable handleClickNurseProfile={handleClickNurseProfile} />
  )
}

export default defaultPage(HumanResourcesNursePage);