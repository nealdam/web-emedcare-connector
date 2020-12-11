import { useRouter } from "next/router";
import DoctorTable from "../../../src/components/DoctorTable/DoctorTable";
import { defaultPage } from "../../../src/hocs/defaultPage";

function HumanResourcesDoctorPage() {
  const router = useRouter();

  const handleClickDoctorDetail = (doctorId) => {
    router.push(router.asPath + "/" + doctorId + "/profile");
  }

  return (
    <div>
      <DoctorTable
        handleClickDoctorDetail = {handleClickDoctorDetail}
      />
    </div>
  );
}

export default defaultPage(HumanResourcesDoctorPage);
