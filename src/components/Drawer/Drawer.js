import {
  Badge,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Link from "next/link";
import React from "react";
import { DRAWER_WIDTH } from "../../constants/dimensions";
import useGlobalContext from "../../contexts/globalContext";
import { useTranslation } from "../../i18n";
import PatientIcon from "../../constants/icons/PatientIcon";
import DoctorIcon from "../../constants/icons/DoctorIcon";
import {
  EventAvailable,
  EventNote,
  MeetingRoom,
  People,
} from "@material-ui/icons";
import NurseIcon from "../../constants/icons/NurseIcon";
import RoomIcon from "../../constants/icons/RoomIcon";
import LinkIcon from "@material-ui/icons/Link";
import { useGetUnConfirmedAppointment } from "../../hooks/appointmentHooks";
// import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  toolbar: theme.mixins.toolbar,
  img: {
    // width: DRAWER_WIDTH,
    height: theme.mixins.toolbar.minHeight,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
}));

function MyDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const {
    isMobileDrawerOpen,
    handleToggleMobileDrawer,
    drawerSelectedItem,
  } = useGlobalContext();

  const { t } = useTranslation();

  const {
    data: numberOfUnConfirmedAppointment,
    isLoading,
    isError,
  } = useGetUnConfirmedAppointment();

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <img
          src="/logo-with-brand.png"
          alt="FPT Logo"
          className={classes.img}
        />
      </div>
      <Divider />
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">{t("Customer Service")}</ListSubheader>
        }
      >
        <Link href="/customer-service/schedule">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith(
              "/customer-service/schedule"
            )}
          >
            <ListItemIcon>
              <EventNote />
            </ListItemIcon>
            <ListItemText primary={t("Schedule")} />
          </ListItem>
        </Link>
        <Link href="/customer-service/patient">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith(
              "/customer-service/patient"
            )}
          >
            <ListItemIcon>
              <PatientIcon />
            </ListItemIcon>
            <ListItemText primary={t("Patient")} />
          </ListItem>
        </Link>
        <Link href="/customer-service/appointment-confirmation">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith(
              "/customer-service/appointment-confirmation"
            )}
          >
            <ListItemIcon>
              {numberOfUnConfirmedAppointment ? (
                <Badge
                  color="error"
                  badgeContent={numberOfUnConfirmedAppointment}
                  max={999}
                >
                  <EventAvailable />
                </Badge>
              ) : (
                <EventAvailable />
              )}
            </ListItemIcon>
            <ListItemText primary={t("Appointment confirmation")} />
          </ListItem>
        </Link>
        <Link href="/customer-service/account-linking">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith(
              "/customer-service/account-linking"
            )}
          >
            <ListItemIcon>
              {/* <Badge color="error" badgeContent={14}> */}
              <LinkIcon />
              {/* </Badge> */}
            </ListItemIcon>
            <ListItemText primary={t("Account linking")} />
          </ListItem>
        </Link>
      </List>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">{t("Human Resources")}</ListSubheader>
        }
      >
        <Link href="/human-resources/doctor">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/human-resources/doctor")}
          >
            <ListItemIcon>
              <DoctorIcon />
            </ListItemIcon>
            <ListItemText primary={t("Doctor")} />
          </ListItem>
        </Link>
        <Link href="/human-resources/nurse">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/human-resources/nurse")}
          >
            <ListItemIcon>
              <NurseIcon />
            </ListItemIcon>
            <ListItemText primary={t("Nurse")} />
          </ListItem>
        </Link>
      </List>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">{t("Scheduler")}</ListSubheader>
        }
      >
        <Link href="/scheduler/shift">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/scheduler/shift")}
          >
            <ListItemIcon>
              <EventNote />
            </ListItemIcon>
            <ListItemText primary={t("Scheduled")} />
          </ListItem>
        </Link>
      </List>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">{t("Room manager")}</ListSubheader>
        }
      >
        <Link href="/room-manager/room">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/room-manager/room")}
          >
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary={t("Room")} />
          </ListItem>
        </Link>
      </List>
      <List
        component="nav"
        subheader={<ListSubheader component="div">{t("Helper")}</ListSubheader>}
      >
        <Link href="/helper/room-queue">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/helper/room-queue")}
          >
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary={t("Room queue")} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={isMobileDrawerOpen}
          onClose={handleToggleMobileDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default MyDrawer;
