import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "../../i18n";
import Section from "../Section";

const useStyles = makeStyles((theme) => ({
  formControl: {},
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  infoDiv: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

export default function AddRoomForm(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const router = useRouter();
  const { handleAddNewRoom } = props;

  const [facilityId, setFacilityId] = useState(1);
  const [hisCode, setHisCode] = useState("");
  const [number, setNumber] = useState("");

  const handleClickCancel = () => {
    router.back();
  };

  const handleClickCreate = () => {
    handleAddNewRoom(facilityId, hisCode, number);
  };

  return (
    <Section title={t("Add new room")}>
      <div className={classes.infoDiv}>
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel>{t("Facility")}</InputLabel>
          <Select
            value={facilityId}
            onChange={(event) => {
              setFacilityId(event.target.value);
            }}
            label={t("Facility")}
          >
            <MenuItem value={1}>Van An CS1</MenuItem>
            <MenuItem value={2}>Van An CS2</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label={t("Room code")}
          value={hisCode}
          onChange={(event) => {
            setHisCode(event.target.value);
          }}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          fullWidth
          label={t("Room number")}
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        />
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
