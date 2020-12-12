import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import Section from "../Section";

export default function NurseTable(props) {
  const { t } = useTranslation();

  return (
    <Section title={t("Nurse list")}>
      <div>
        nurse
      </div>
    </Section>
  );
}

NurseTable.propTypes = {
  nurses: PropTypes.arrayOf(PropTypes.object),
};
