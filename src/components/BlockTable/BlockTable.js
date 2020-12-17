import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useTranslation } from "../../i18n";
import Section from "../Section/Section";
import PropTypes from 'prop-types';

export default function BlockTable(props) {

  const { t } = useTranslation();
  const { blocks } = props;
  
  return (
    <Section title={t("Block list")}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("Prefix")}</TableCell>
              <TableCell>{t("Start at")}</TableCell>
              <TableCell>{t("Duration")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blocks.map((block) => (
              <TableRow key={block.id}>
                <TableCell>{block.prefix}</TableCell>
                <TableCell>{block.startedAt}</TableCell>
                <TableCell>{block.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  )
}

BlockTable.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
}