export default (scale: number) => {
  if (scale > 1) {
    return 1;
  }
  if (scale < 0.5) {
    return 0.5;
  }
  return scale;
};