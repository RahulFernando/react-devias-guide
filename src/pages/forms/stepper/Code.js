import { CopyBlock, dracula } from "react-code-blocks";

import Snippet from "../../../components/Snippet";

import { form } from "src/data/forms/stepper/codeblock";

const Code = () => {
  return (
    <Snippet>
      <CopyBlock
        language="jsx"
        text={form}
        showLineNumbers
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </Snippet>
  );
};

export default Code;
