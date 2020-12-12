import PropTypes from 'prop-types';
import { useTranslation } from '../../i18n';
import Section from '../Section';
import NurseInfo from './NurseInfo';

export default function NurseDetail(props) {

  const { t } = useTranslation();

  return (
    <div>
      <NurseInfo />
    </div>
  )
}

NurseDetail.propTypes = {
  nurse: PropTypes.object,
}