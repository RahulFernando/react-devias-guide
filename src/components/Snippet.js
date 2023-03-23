import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const Snippet = ({ children }) => {
  return (
    <div style={{ fontFamily: "Fira Code, monospace" }}>
      <Stack spacing={2}>{children}</Stack>
    </div>
  );
};

Snippet.propTypes = {
  children: PropTypes.node,
};

export default Snippet;
