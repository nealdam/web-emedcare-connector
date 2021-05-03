import { makeStyles } from "@material-ui/core";
import { DEFAULT_PAGE_SIZE } from "../../constants/pagingConstant";
import { useTranslation } from "../../i18n";

const useStyles = makeStyles((theme) => ({}));

export default function HealthDeclarationTable(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    declarations,
    paging,
    isLoading,
    isError,
    handleSetTemperature,
  } = props;

  const [pageOffset, setPageOffset] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);

  const handleChangePage = (event, offset) => {
    setPageOffset(offset);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleClickSearch = (event) => {

  }

  if (isLoading) return <div>{t("Loading")}</div>;
  if (isError) return <div>{t("Error")}</div>
}
