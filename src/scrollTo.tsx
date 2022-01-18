export const scrollToId = (id: string, delay = 100) => setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" }), delay);
