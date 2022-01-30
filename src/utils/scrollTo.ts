export const scrollToId = (id: string, delay = 100) =>
  setTimeout(() => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "center" });
    else
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  }, delay);
