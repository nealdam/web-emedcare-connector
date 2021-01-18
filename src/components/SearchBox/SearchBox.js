import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PropTypes from 'prop-types'
import { useTranslation } from "../../i18n";

export default function SearchBox(props) {

  const { t } = useTranslation();
  const { helpText } = props;

  return (
    <div>
      <TextField
            variant="outlined"
            fullWidth
            label={t("Search")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            helperText={helpText}
          />
    </div>
  )
}

SearchBox.propTypes = {
  helpText: PropTypes.string,
}