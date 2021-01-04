import AddNurseForm from "../../../../src/components/AddNurseForm";
import { CREATE_NEW_NURSE_URL } from "../../../../src/constants/url";
import { defaultPage } from "../../../../src/hocs/defaultPage";
import { protectRoute } from "../../../../src/hocs/protectRoute";

function AddNewNursePage() {
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
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
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
