import { useRouter } from "next/router";
import { useEffect } from "react";
import ShiftDetail from "../../../../../src/components/ShiftDetail";
import { defaultPage } from "../../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../../src/hocs/protectRoute";
import { useSingleShiftDetail } from "../../../../../src/hooks/shiftHooks";

function SchedulerScheduleShiftDetailPage() {
  const router = useRouter();
  const { shiftId } = router.query;

  const { data, isLoading, isError, setShiftId } = useSingleShiftDetail();

  useEffect(() => {
    setShiftId(shiftId);
  }, [shiftId]);

  return <ShiftDetail shift={data} isLoading={isLoading} isError={isError} />;
}

export default protectRoute(defaultPage(SchedulerScheduleShiftDetailPage));
