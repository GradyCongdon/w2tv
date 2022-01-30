export const scrollTop = (id: string, offset = 0) =>
  setTimeout(() => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollTop = offset;
  }, 32);
