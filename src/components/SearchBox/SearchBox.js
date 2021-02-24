import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "../../i18n";

export default function SearchBox(props) {
  const { t } = useTranslation();
  const { helpText, handleSearch } = props;
  const [searchText, setSearchText] = useState("");

  const handleClickSearch = (e) => {
    e.preventDefault();

    handleSearch(searchText);
  };

  return (
    <form onSubmit={e => handleClickSearch(e)}>
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
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </form>
  );
}

SearchBox.propTypes = {
  helpText: PropTypes.string,
  handleSearch: PropTypes.func,
};
