import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import AddDoctorForm from "../../../../src/components/AddDoctorForm";
import Section from "../../../../src/components/Section";
import { errorNotify, successNotify } from "../../../../src/constants/notistackVariants";
import { CREATE_NEW_DOCTOR_URL } from "../../../../src/constants/url";
import { defaultPage } from "../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../src/hocs/protectRoute";
import { useTranslation } from "../../../../src/i18n";

function AddNewDoctorPage(props) {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const handleAddNewDoctor = (hisCode, name, sex, email, phoneNumber, birthDate) => {
    fetch(CREATE_NEW_DOCTOR_URL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hisCode: hisCode,
        name: name,
        gender: sex,
        email: email,
        phoneNumber: phoneNumber,
        birthDay: birthDate,
      }),
    })
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar(t("Create doctor successful"), successNotify);
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
        enqueueSnackbar(t("Error during creating doctor"), errorNotify);
        console.error(error);
      });
  };

  return (
    <div>
      <AddDoctorForm handleAddNewDoctor={handleAddNewDoctor} />
    </div>
  );
}

export default protectRoute(defaultPage(AddNewDoctorPage));
