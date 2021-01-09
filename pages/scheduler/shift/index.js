import useSWR from "swr";
import ShiftTable from "../../../src/components/ShiftTable"
import { GET_ALL_SHIFT_URL } from "../../../src/constants/url"
import fetcher from "../../../src/fetcher";
import { defaultPage } from "../../../src/hocs/defaultPage"
import { protectRoute } from "../../../src/hocs/protectRoute"

function SchedulerShiftPage() {

  const { data, error} = useSWR(GET_ALL_SHIFT_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <ShiftTable shifts={data} />
  )
}

export default protectRoute(defaultPage(SchedulerShiftPage))