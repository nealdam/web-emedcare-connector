import Schedule from "../../../src/components/Schedule";
import { defaultPage } from "../../../src/hocs/defaultPage";

function CustomerServiceSchedulePage() {
  return (
    <div>
      <Schedule />
    </div>
  );
}

export default defaultPage(CustomerServiceSchedulePage);
