import { CopyBlock, atomOneDark } from "react-code-blocks";

import {
  container,
  rows,
  simpleTable,
} from "src/data/tables/simple-table/codeblock";

import Snippet from "../../../components/Snippet";

const Code = () => {
  return (
    <Snippet>
      <CopyBlock
        language="jsx"
        text={container}
        showLineNumbers
        theme={atomOneDark}
        wrapLines={true}
        codeBlock
      />
      <CopyBlock
        language="jsx"
        text={rows}
        showLineNumbers
        theme={atomOneDark}
        wrapLines={true}
        codeBlock
      />
      <CopyBlock
        language="jsx"
        text={simpleTable}
        showLineNumbers
        theme={atomOneDark}
        wrapLines={true}
        codeBlock
      />
    </Snippet>
  );
};

export default Code;
