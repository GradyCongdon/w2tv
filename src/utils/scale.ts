const scale = [
  "#ffe6cb",
  "#ffe3af",
  "#ffc58a",
  "#ffa474",
  "#fa8366",
  "#ed635c",
  "#db4551",
  "#c52840",
  "#aa0e27",
  "#8b0000",
];
export const getScaleColor = (number: number) => {
  const scaleIndex = +Math.floor(number).toFixed(0).padStart(2, "0")[0];
  return scale[scaleIndex];
};

export const getScaleTextColor = (number: number) => {
  return number <= 30 ? "rgb(197, 134, 42)" : getScaleColor(number);
};
