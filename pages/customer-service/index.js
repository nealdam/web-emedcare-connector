import { defaultPage } from "../../src/hocs/defaultPage"
import { protectRoute } from "../../src/hocs/protectRoute"

function CustomerServicePage() {


  return (
    <div>Customer Service Page</div>
  )
}

export default protectRoute(defaultPage(CustomerServicePage))