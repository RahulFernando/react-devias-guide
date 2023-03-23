const generateUniqueKey = (prefix) => `${prefix}_${new Date().getTime()}`;

export default generateUniqueKey;
