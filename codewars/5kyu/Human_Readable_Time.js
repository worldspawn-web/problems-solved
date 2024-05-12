const humanReadable = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  return `${hours}:${minutes}:${seconds}`;
};

humanReadable(86399); // 23:59:59
