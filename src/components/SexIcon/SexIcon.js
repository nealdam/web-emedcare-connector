import FemaleIcon from '../../constants/icons/FemaleIcon';
import MaleIcon from '../../constants/icons/MaleIcon'; 
import { Person } from "@material-ui/icons";
import PropTypes from "prop-types";
import { grey } from '@material-ui/core/colors';

export default function SexIcon(props) {
  const { sex = undefined } = props;

  if (sex == undefined) return <Person style={{ color: grey[500] }} />
  if (sex) return <FemaleIcon />
  return <MaleIcon />
}

SexIcon.propTypes = {
  sex: PropTypes.bool,
};
