import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";

function HelperHealthDeclarationPage() {
  return <div>Health declaration page</div>;
}

export default protectRoute(defaultPage(HelperHealthDeclarationPage));
