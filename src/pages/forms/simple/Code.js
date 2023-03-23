import { CopyBlock, dracula } from "react-code-blocks";

import { form, general, address } from "src/data/forms/simple/codeblock";
import Snippet from "../../../components/Snippet";

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
      <CopyBlock
        language="jsx"
        text={general}
        showLineNumbers
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      <CopyBlock
        language="jsx"
        text={address}
        showLineNumbers
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </Snippet>
  );
};

export default Code;
