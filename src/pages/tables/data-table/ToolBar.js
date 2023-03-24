import PropTypes from "prop-types";

import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { memo } from "react";

const ToolBar = memo(({ isColumn, isFilter, isExport }) => (
  <GridToolbarContainer>
    {isColumn && <GridToolbarColumnsButton />}
    {isFilter && <GridToolbarFilterButton />}
    {isExport && <GridToolbarExport />}
  </GridToolbarContainer>
));

ToolBar.propTypes = {
  isColumn: PropTypes.bool,
  isFilter: PropTypes.bool,
  isExport: PropTypes.bool,
};

ToolBar.defaultProps = {
  isColumn: true,
  isFilter: true,
  isExport: true,
};

export default ToolBar;
