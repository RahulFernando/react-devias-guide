import { CopyBlock, atomOneDark } from "react-code-blocks";

import { container, toolbar, data } from "src/data/tables/data-table/codeblock";

import Snippet from "../../../components/Snippet";

const Code = () => {
  return (
    <Snippet>
      <CopyBlock
        language="jsx"
        text={toolbar}
        showLineNumbers
        theme={atomOneDark}
        wrapLines={true}
        codeBlock
      />
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
        text={data}
        showLineNumbers
        theme={atomOneDark}
        wrapLines={true}
        codeBlock
      />
    </Snippet>
  );
};

export default Code;
