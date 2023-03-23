const { useState } = require("react");

const usePreview = () => {
  const [isPreview, setIsPreview] = useState(true);

  const toggleHandler = () => setIsPreview(!isPreview);

  return [isPreview, toggleHandler];
};

export default usePreview;
