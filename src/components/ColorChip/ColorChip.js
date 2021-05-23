import { Chip, colors } from '@material-ui/core';
import PropTypes from 'prop-types'

export default function ColorChip (props) {
  const { label, variant } = props;

  switch (variant) {
    case 'success':
      return <Chip label={label} color="primary" style={{backgroundColor: colors.green[500]}} />
    case 'error':
      return <Chip label={label} color="primary" style={{backgroundColor: colors.red[500]}} />
    case 'info':
      return <Chip label={label} color="primary" style={{backgroundColor: colors.blue[500]}} />
    case 'warning':
      return <Chip label={label} color="primary" style={{backgroundColor: colors.yellow[500], color: 'black'}} />
    default:
      return <Chip label={label} />
  }
}

ColorChip.proptypes = {
  variant: PropTypes.oneOf(['default', 'success', 'error', 'info', 'warning']),
  label: PropTypes.string,
}

