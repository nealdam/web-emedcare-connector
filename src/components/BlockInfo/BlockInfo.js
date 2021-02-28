import { makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import { toDateTime } from "../../utils/datetimeUtil";
import Section from "../Section";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function BlockInfo(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { block, isLoading, isError } = props;

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <Section title={t("Block info")}>
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Prefix")}
        value={block.prefix}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={t("Start time")}
        value={toDateTime(block.startedAt)}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        className={classes.textField}
        variant="outlined"
        fullWidth
        label={`${t("Duration")} (${t("Minutes")})`}
        value={block.duration * 60}
        InputProps={{
          readOnly: true,
        }}
      />
    </Section>
  );
}

BlockInfo.propTypes = {
  block: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.object,
};
