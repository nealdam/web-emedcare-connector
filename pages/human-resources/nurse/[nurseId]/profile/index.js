import { useRouter } from "next/router"
import { useEffect } from "react";
import NurseDetail from "../../../../../src/components/NurseDetail"
import { defaultPage } from "../../../../../src/hocs/defaultPage"
import { protectRoute } from "../../../../../src/hocs/protectRoute"
import { useSingleNurseDetail } from "../../../../../src/hooks/nurseHooks";

function HumanResourcesNurseProfilePage() {

  const router = useRouter();
  const { nurseId } = router.query;

  const { data, isLoading, isError, setNurseId } = useSingleNurseDetail();

  useEffect(() => {
    setNurseId(nurseId);
  }, [nurseId])

  return (
      <NurseDetail nurse={data} isLoading={isLoading} isError={isError} />
  )
}

export default protectRoute(defaultPage(HumanResourcesNurseProfilePage))