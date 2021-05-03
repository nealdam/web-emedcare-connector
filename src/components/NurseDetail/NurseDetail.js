import PropTypes from 'prop-types';
import { useTranslation } from '../../i18n';
import Section from '../Section';
import NurseInfo from './NurseInfo';

export default function NurseDetail(props) {

  const { t } = useTranslation();
  const { nurse, isLoading, isError } = props;

  if (isLoading) return <div>{t("Loading")}</div>
  if (isError) return <div>{t("Error")}</div>

  return (
      <NurseInfo nurse={nurse} />
  )
}

NurseDetail.propTypes = {
  nurse: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
}