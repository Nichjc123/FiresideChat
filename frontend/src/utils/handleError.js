export const handleError = (res) => {
  if (res.status === 400) {
    throw new Error("server error");
  }
  return res.json();
};
