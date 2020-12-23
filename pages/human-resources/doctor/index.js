import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useState } from "react";
import CreateDoctorAccountDialog from "../../../src/components/CreateDoctorAccountDialog";
import DoctorTable from "../../../src/components/DoctorTable/DoctorTable";
import { successNotify } from "../../../src/constants/notistackVariants";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useTranslation } from "../../../src/i18n";

function HumanResourcesDoctorPage() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [isCreateDoctorDialogOpen, setIsCreateDoctorDialogOpen] = useState(
    false
  );

  const handleClickDoctorDetail = (doctorId) => {
    router.push(router.asPath + "/" + doctorId + "/profile");
  };

  const handleClickCreateDoctorAccount = (doctorId) => {
    setIsCreateDoctorDialogOpen(true);
  };

  const handleCreateDoctorAccount = () => {
    setIsCreateDoctorDialogOpen(false);
    enqueueSnackbar(t("Create account successful"), successNotify);
  };

  return (
    <div>
      <DoctorTable
        handleClickDoctorDetail={handleClickDoctorDetail}
        handleClickCreateDoctorAccount={handleClickCreateDoctorAccount}
      />
      <CreateDoctorAccountDialog
        open={isCreateDoctorDialogOpen}
        setOpen={setIsCreateDoctorDialogOpen}
        handleCreateAccount={handleCreateDoctorAccount}
      />
    </div>
  );
}

export default protectRoute(defaultPage(HumanResourcesDoctorPage));
