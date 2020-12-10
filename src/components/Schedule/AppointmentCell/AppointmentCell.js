import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../../i18n";

const useStyle = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.action.hover
    }
  }
}))

export default function AppointmentCell(props) {
  const { t } = useTranslation();
  const { patientName = "Patient Name", patientCode = "Patient Code" } = props;
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body1" component="p">
          {t("Pt.")} {patientName}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {t("Pt.No")} {patientCode}
        </Typography>
      </CardContent>
    </Card>
  );
}

AppointmentCell.propTypes = {
  patientName: PropTypes.string,
  patientCode: PropTypes.string,
};
