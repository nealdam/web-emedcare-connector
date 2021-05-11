import MedicalDeclarationTable from "../../../src/components/MedicalDeclarationTable";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";
import { useMedicalDeclaration } from "../../../src/hooks/medicalDeclarationHooks";

function HelperHealthDeclarationPage() {

  const handleClickMedicalDeclarationDetail = (id) => {

  }

  const {
    data, paging, isLoading, isError, setOffset, setLimit
  } = useMedicalDeclaration();

  return (
    <MedicalDeclarationTable 
      declarations={data}
      paging={paging}
      isLoading={isLoading}
      isError={isError}
      setOffset={setOffset}
      setLimit={setLimit}
      handleClickMedicalDeclarationDetail={handleClickMedicalDeclarationDetail}
    />
  );
}

export default protectRoute(defaultPage(HelperHealthDeclarationPage));
