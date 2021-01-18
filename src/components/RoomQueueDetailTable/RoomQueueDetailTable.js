import { Chip, colors, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types'
import { useTranslation } from '../../i18n';
import Section from '../Section';

const roomQueue = {
  id: 1,
  number: "001",
  name: "Nhi 1",
  patients: [
    {
      id: 1,
      number: "12A1",
      name: "Nguyễn Văn A"
    },
    {
      id: 2,
      number: "8",
      name: "Nguyễn Văn A"
    },
    {
      id: 3,
      number: "9",
      name: "Nguyễn Văn A"
    },
    {
      id: 4,
      number: "10",
      name: "Nguyễn Văn A"
    },
    {
      id: 5,
      number: "11",
      name: "Nguyễn Văn A"
    },
  ]
}

const useStyles = makeStyles((theme) => ({
  statusCell: {
    maxWidth: 300
  }
}))

export default function RoomQueueDetailTable(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Section title={`${t("Queue list")} - ${t("Room name")}: ${roomQueue.name} - ${t("Room number")}: ${roomQueue.number}`}>
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
                {roomQueue.patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>{patient.number}</TableCell>
                    <TableCell>{patient.name}</TableCell>
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