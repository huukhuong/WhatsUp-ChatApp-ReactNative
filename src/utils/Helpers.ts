const timestampToHour = (timestamp: number) => {
  const date = new Date(timestamp);
  const h = date.getHours();
  const m = date.getMinutes();
  const h_out = h < 10 ? `0${h}` : `${h}`;
  const m_out = m < 10 ? `0${m}` : `${m}`;
  return h_out + ":" + m_out;
};

const getCurrentTimestamp = () => {
  return Date.now();
};

export const Helpers = {
  timestampToHour,
  getCurrentTimestamp,
};
