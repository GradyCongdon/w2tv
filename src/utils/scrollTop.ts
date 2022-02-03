export const scrollTop = (id: string, offset = 0) => {
  const elem = document.getElementById(id);
  if (elem) elem.scrollTop = offset;
};
