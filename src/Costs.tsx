import { formatUSD } from "utils/formatUSD";
import { TeaProduct } from "types/TeaProduct";
import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";

const getp = (t: TeaProduct, index: number) => {
  const f = t.forms[index];
  if (!f) return 0;
  return f.price;
};

export function Cost() {
  const teas = useRecoilValue(teasState);
  const highCost = teas.reduce((sum, t) => (sum += t.quantity * getp(t, 0)), 0);
  const lowCost = teas.reduce((sum, t) => (sum += t.quantity * getp(t, 1)), 0);
  console.log("high", formatUSD(highCost));
  console.log("low", formatUSD(lowCost));
}
