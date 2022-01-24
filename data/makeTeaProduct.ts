import { FullTea, Type, PredictedType } from "../src/types/FullTea.ts";
import {
  TeaStyle,
  ImageType,
  Image,
  TeaProduct,
} from "../src/types/TeaProduct.ts";

function fmtJSON(obj: object) {
  return JSON.stringify(obj, null, 2);
}

const getStyle = (t: FullTea): TeaStyle => {
  switch (t.type) {
    case Type.BlackTea:
      return "black";
    case Type.Heicha:
      return "black";
    case Type.Oolong:
      return "oolong";
    case Type.RawPuerTea:
      return "raw";
    case Type.RipePuerTea:
      return "ripe";
    default:
      return "unknown";
  }
};

const makeImage = (
  type: ImageType,
  slug: string,
  size: number,
  view: string
): Image => {
  return {
    type,
    src: `${slug}${view}_${size}x.jpg`,
    srcWhiteBalanced: `${slug}${view}w_${size}x.jpg`,
    alt: type,
    width: size,
    height: size,
  };
};
const defaultImage = makeImage("wrapper", "xxx", 300, "w");

const getImage = (t: FullTea, type: PredictedType): Image => {
  const match =
    t.images.find(
      (i) => i.predictedType === type || i.predictedType === "bamboo"
    ) || t.images[0];
  if (!match) defaultImage;
  const src = match.url.replace("_SIZEx", "_400x");
  return {
    type: type === "bamboo" ? "tea" : type,
    src,
    srcWhiteBalanced: src,
    alt: t.name,
    width: 400,
    height: 400,
  };
};

const data = await Deno.readTextFile("fullTeas.json");
const fullTeas: FullTea[] = JSON.parse(data);
const validTeas = fullTeas.filter((t) => t.images.length);

const teaProducts: TeaProduct[] = validTeas.map((t) => {
  return {
    slug: t.key,
    oSlug: t.key,
    year: t.year,
    style: getStyle(t),
    name: t.name.replace(t.year.toString(), "").trim(),
    size: t.forms[0]?.size || "unknown",
    wrapper: getImage(t, "wrapper"),
    bing: getImage(t, "tea"),
    soup: getImage(t, "soup"),
    description: t.description?.replace(/<\/?[^>]+(>|$)/g, "") || "",
    images: t.images,
    forms: t.forms,
  };
});

await Deno.writeTextFile("../src/teaProducts.json", fmtJSON(teaProducts));
