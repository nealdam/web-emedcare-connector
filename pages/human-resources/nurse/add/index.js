import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import AddNurseForm from "../../../../src/components/AddNurseForm";
import { errorNotify, successNotify } from "../../../../src/constants/notistackVariants";
import { CREATE_NEW_NURSE_URL } from "../../../../src/constants/url";
import { defaultPage } from "../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../src/hocs/protectRoute";
import { useTranslation } from "../../../../src/i18n";

function AddNewNursePage() {

  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const router = useRouter();

  const handleAddNewNurse = (hisCode, name, sex, birthDate) => {
    fetch(CREATE_NEW_NURSE_URL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hisCode: hisCode,
        name: name,
        gender: sex,
        birthDate: birthDate,
      }),
    })
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar(t("Create nurse successful"), successNotify);
          router.back();
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        enqueueSnackbar(t("Error during creating nurse"), errorNotify);
        console.error(error);
      });
  };

  return (
    <div>
      <AddNurseForm handleAddNewNurse={handleAddNewNurse} />
    </div>
  );
}

export default protectRoute(defaultPage(AddNewNursePage));
