const pad = (n: number | string) => {
  return (n < 10) ? ('0' + n) : n;
};

export default (dur: number) => {
  const h = pad((dur / 3600).toFixed());
  const m = pad((( dur / 60 ) % 60).toFixed());
  const s = pad(dur % 60);
  
  return `${h}.${m}.${s}`;
};