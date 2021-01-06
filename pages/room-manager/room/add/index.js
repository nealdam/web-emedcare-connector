import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import AddRoomForm from "../../../../src/components/AddRoomForm"
import { errorNotify, successNotify } from "../../../../src/constants/notistackVariants";
import { CREATE_NEW_ROOM_URL } from "../../../../src/constants/url";
import { defaultPage } from "../../../../src/hocs/defaultPage"
import { protectRoute } from "../../../../src/hocs/protectRoute"
import { useTranslation } from "../../../../src/i18n";

function AddNewRoomPage() {

  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const router = useRouter();

  const handleAddNewRoom = (facilityId, hisCode, number) => {
    fetch(CREATE_NEW_ROOM_URL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        facilityId: facilityId,
        hisCode: hisCode,
        number: number,
        specialtyIds: [1,2,3],
      }),
    })
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar(t("Create room successful"), successNotify);
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
        enqueueSnackbar(t("Error during creating room"), errorNotify);
        console.error(error);
      });
  };

  return (
    <div>
      <AddRoomForm handleAddNewRoom={handleAddNewRoom} />
    </div>
  )
}

export default protectRoute(defaultPage(AddNewRoomPage))