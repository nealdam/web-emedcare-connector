import { Chip, colors, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types'
import { useTranslation } from '../../i18n';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  statusCell: {
    maxWidth: 300
  }
}))

export default function RoomQueueDetailTable(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { patients, room, isLoading, isError } =  props;

  if (isLoading) return <div>{t("Loading")}</div>
  if (isError) return <div>{t("Error")}</div>

  return (
    <Section title={`${t("Queue list")} - ${t("Room name")}: ${room.name} - ${t("Room number")}: ${room.number}`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell width={200}>{t("Number")}</TableCell>
                  <TableCell>{t("Name")}</TableCell>
                  <TableCell width={200}>{t("Status")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>{patient.sokham}</TableCell>
                    <TableCell>{patient.hoten}</TableCell>
                    <TableCell><Chip label={t("Waiting")} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Section>
  )
}

RoomQueueDetailTable.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object,),
}