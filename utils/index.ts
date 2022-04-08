const formatLog = (val: string) => {
  return val;
};

export { formatLog };

// mongodb+srv://<user>:<password><cluster>.mongodb.net/url-shortner?retryWrites=true&w=majority

export const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const easing = [0.43, 0.13, 0.23, 0.96];
export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

export const transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0.2,
};
