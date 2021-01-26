import AccountLinkingRequestTable from "../../../src/components/AccountLinkingRequestTable";
import { defaultPage } from "../../../src/hocs/defaultPage";
import { protectRoute } from "../../../src/hocs/protectRoute";

function AccountLinkingPage() {

  return (
    <AccountLinkingRequestTable />
  )
}

export default protectRoute(defaultPage(AccountLinkingPage));