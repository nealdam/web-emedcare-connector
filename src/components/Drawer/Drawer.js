import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  useTheme
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Link from "next/link";
import React from "react";
import { DRAWER_WIDTH } from "../../constants/dimensions";
import useGlobalContext from "../../contexts/globalContext";
import { useTranslation } from "../../i18n";
import PatientIcon from '../../constants/icons/PatientIcon';
import DoctorIcon from '../../constants/icons/DoctorIcon';
import { EventNote } from "@material-ui/icons";
import NurseIcon from '../../constants/icons/NurseIcon';
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
          <ListItem button selected={drawerSelectedItem.startsWith("/customer-service/schedule")}>
            <ListItemIcon><EventNote /></ListItemIcon>
            <ListItemText primary={t("Schedule")} />
          </ListItem>
        </Link>
        <Link href="/customer-service/patient">
          <ListItem button selected={drawerSelectedItem.startsWith("/customer-service/patient")}>
            <ListItemIcon><PatientIcon /></ListItemIcon>
            <ListItemText primary={t("Patient")} />
          </ListItem>
        </Link>
      </List>
      <List
        component="nav"
        subheader={<ListSubheader component="div">{t("Human Resources")}</ListSubheader>}
      >
        <Link href="/human-resources/doctor">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/human-resources/doctor")}
          >
            <ListItemIcon><DoctorIcon /></ListItemIcon>
            <ListItemText primary={t("Doctor")} />
          </ListItem>
        </Link>
        <Link href="/human-resources/nurse">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/human-resources/nurse")}
          >
            <ListItemIcon><NurseIcon /></ListItemIcon>
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
        <Link href="/admin/students">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/admin/students")}
          >
            <ListItemIcon>{/* <StudentIcon /> */}</ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
        </Link>
        <Link href="/admin/departments">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/admin/departments")}
          >
            <ListItemIcon>{/* <DepartmentsIcon /> */}</ListItemIcon>
            <ListItemText primary="Departments" />
          </ListItem>
        </Link>
        <Link href="/admin/agents">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/admin/agents")}
          >
            <ListItemIcon>{/* <AgentIcon /> */}</ListItemIcon>
            <ListItemText primary="Agents" />
          </ListItem>
        </Link>
      </List>
      <List
        component="nav"
        subheader={<ListSubheader component="div">{t("Room manager")}</ListSubheader>}
      >
        <Link href="/manager/department">
          <ListItem
            button
            selected={drawerSelectedItem.startsWith("/manager/department")}
          >
            <ListItemIcon>{/* <DepartmentIcon /> */}</ListItemIcon>
            <ListItemText primary="Department" />
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
