import { useRouter } from "next/router";
import useSWR from "swr";
import NurseTable from "../../../src/components/NurseTable";
import { GET_ALL_NURSES_URL } from "../../../src/constants/url";
import fetcher from "../../../src/fetcher";
import { defaultPage } from "../../../src/hocs/defaultPage"
import { protectRoute } from "../../../src/hocs/protectRoute";

function HumanResourcesNursePage() {

  const route = useRouter();
  const { data, error } = useSWR(GET_ALL_NURSES_URL, fetcher);

  const handleClickNurseProfile = (nurseId) => {
    route.push(route.asPath + "/" + nurseId + "/profile");
  }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <NurseTable handleClickNurseProfile={handleClickNurseProfile} nurses={data} />
  )
}

export default protectRoute(defaultPage(HumanResourcesNursePage));