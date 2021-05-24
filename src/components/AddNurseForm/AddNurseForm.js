import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "../../i18n";
import Section from "../Section";
import DateFnsUtils from "@date-io/date-fns";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  infoDiv: {
    marginBottom: theme.spacing(2),
  },
}));

export default function AddNurseForm(props) {
  const classes = useStyles();
  const { handleAddNewNurse } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const [hisCode, setHisCode] = useState("");
  const [name, setName] = useState("");
  const [sex, setSex] = useState(true);
  const [birthDate, setBirthDate] = useState(new Date());

  const handleSexChange = (event) => {
    setSex(event.target.value == "female" ? true : false);
  };

  const handleClickCancel = () => {
    router.back();
  };

  const handleClickCreate = () => {
    handleAddNewNurse(hisCode, name, sex, birthDate);
  };

  return (
    <Section title={t("Add nurse")}>
      <div className={classes.infoDiv}>
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label={t("Nurse code")}
          value={hisCode}
          onChange={(event) => {
            setHisCode(event.target.value);
          }}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label={t("Name")}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <FormControl
          className={classes.textField}
          component="fieldset"
          variant="outlined"
        >
          <FormLabel component="legend">{t("Sex")}</FormLabel>
          <RadioGroup
            aria-label="sex"
            row
            name="sex"
            value={sex ? "female" : "male"}
            onChange={handleSexChange}
          >
            <FormControlLabel
              value="male"
              control={<Radio />}
              label={t("Male")}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label={t("Female")}
            />
          </RadioGroup>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            label={t("Birth date")}
            value={birthDate}
            onChange={setBirthDate}
            format="dd/MM/yyy"
            animateYearScrolling
            inputVariant="outlined"
            fullWidth
          />
        </MuiPickersUtilsProvider>
      </div>
      <Grid container justify="flex-end">
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={handleClickCancel}
        >
          {t("Cancel")}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleClickCreate}
        >
          {t("Create")}
        </Button>
      </Grid>
    </Section>
  );
}

AddNurseForm.propTypes = {
  handleAddNewNurse: PropTypes.func,
};
