export default (n: number | string) => {
  return (n > 0 ? '+' : '') + n;
};