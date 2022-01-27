import { TeaIn, Image as ImageIn, Style as StyleIn } from "./TeaIn.ts";
import {
  Style,
  Images,
  TeaProduct,
  ImageSubject,
} from "../src/types/TeaProduct.ts";
import type { TeaFull } from "./TeaFull.ts";

function fmtJSON(obj: unknown) {
  return JSON.stringify(obj, null, 2);
}

const getStyle = (t: TeaIn): Style => {
  switch (t.style) {
    case StyleIn.Black:
      return "black";
    case StyleIn.Oolong:
      return "oolong";
    case StyleIn.Raw:
      return "raw";
    case StyleIn.Ripe:
      return "ripe";
    default:
      console.log("white style defaulting", t.name);
      return "white";
  }
};

const getSubject = (i: ImageIn): ImageSubject => {
  const match = i.subject.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  if (!match) {
    console.error("no subject match", i.subject, i);
    return "chabu";
  }

  const s = match
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");
  const camel = s.slice(0, 1).toLowerCase() + s.slice(1);
  return camel as ImageSubject;
};

const getImages = (t: TeaIn): Images => {
  const images = {} as Images;
  t.images
    .sort((a, b) => a.probability - b.probability)
    .forEach((i) => {
      const subject = getSubject(i);
      images[subject] = i.url;
    });
  return images;
};

async function main() {
  const dataFull = await Deno.readTextFile("fullTeas.json");
  const fullTeas: TeaFull[] = JSON.parse(dataFull);
  const dataIn = await Deno.readTextFile("teaIn.json");
  const teasIn: TeaIn[] = JSON.parse(dataIn);

  const teaProducts: TeaProduct[] = teasIn.map((t: TeaIn) => {
    const full = fullTeas.find((f) => f.key === t.slug) as TeaFull;

    return {
      slug: t.slug,
      year: t.year,
      style: getStyle(t),
      name: t.name.replace(t.year.toString(), "").trim(),
      size: t.forms[0]?.size || "unknown",
      description: t.description?.replace(/<\/?[^>]+(>|$)/g, "") || "",
      images: getImages(t),
      forms: t.forms,
      url: full.url || "",
      tags: full.tags,
      quantity: full.quantity,
      thumbnailUrl: full.thumbnail_url || "",
      version: full.version || "",
    };
  });

  await Deno.writeTextFile("../src/teaProducts.json", fmtJSON(teaProducts));
}

await main();
