import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedSlugState } from "states/selectedSlug";
import { viewState } from "states/view";
import { whiteBalancedState } from "states/whiteBalanced";
import { TeaProduct, TeaImage } from "types/TeaProduct";
import { Image } from "./Image";
import "./Card.scss";
import { isParameter } from "typescript";
import { allTeasState, teasState } from "states/teas";
import { ImageFull, ImageSubject } from "types/FullTea";

const getSubject = (img: ImageFull): ImageSubject => {
  if (img.subject) return img.subject;
  switch (img.predictedType) {
    case "tea":
      if (img.key.match("2018")) {
        if (img.url.match("-6_")) return "leaf";
        return img.url.match("-4_") ? "tea-bottom" : "tea-top";
      }
      return img.url.match("-3_") ? "tea-bottom" : "tea-top";
    case "wrapper":
      return "wrapper-top";
    case "underside":
      return img.url.match(/\D_/) ? "wrapper-top" : "wrapper-bottom";
    default:
      return img.predictedType;
  }
};
export type Props = {
  tea: TeaProduct;
};

const options = [
  "leaf",
  "soup",
  "tea-bottom",
  "tea-detail",
  "tea-top",
  "tong",
  "chabu",
  "shirt",
  "wrapper-bottom",
  "wrapper-detail",
  "wrapper-top",
];

export const Picker = ({ tea }: Props) => {
  const [teas, setTeas] = useRecoilState(allTeasState);
  const { year, name } = tea;
  const setTeaImage = (
    tea: TeaProduct,
    image: ImageFull,
    iI: number,
    e: any
  ) => {
    const tI = teas.findIndex((x) => x.slug === tea.slug);
    const teasCopy = JSON.parse(JSON.stringify(teas));

    teasCopy[tI].images[iI] = {
      ...image,
      subject: e.target.value,
    };

    setTeas(teasCopy);
  };
  const removeTeaImage = (tea: TeaProduct, iI: number) => {
    const tI = teas.findIndex((x) => x.slug === tea.slug);
    const teasCopy = JSON.parse(JSON.stringify(teas));
    teasCopy[tI].images.splice(iI, 1);
    setTeas(teasCopy);
  };
  const mark = (tea: TeaProduct) => {
    const tI = teas.findIndex((x) => x.slug === tea.slug);
    const teasCopy = JSON.parse(JSON.stringify(teas));
    teasCopy[tI].images = teasCopy[tI].images.map((i: ImageFull) => ({
      ...i,
      subject: i.subject || getSubject(i),
    }));
    localStorage.setItem("subjects", JSON.stringify(teasCopy));
    setTeas(teasCopy);
  };

  return (
    <figure>
      <div className="content">
        <div className="icon"></div>
        <h3 className="year glow">{year}</h3>
        <h2 className="name">{name}</h2>
      </div>
      {tea.images.map((img, i) => (
        <div
          key={img.url}
          style={{
            border: "1px solid black",
            backgroundColor: img.subject ? "lightgreen" : "white",
          }}
        >
          <Image
            src={img.url.replace("SIZE", "100")}
            alt={name}
            width={100}
            height={100}
          />

          <div style={{ float: "right" }}>
            {img.predictedType}
            <br />
            <select
              defaultValue={getSubject(img)}
              onChange={(e) => setTeaImage(tea, img, i, e)}
            >
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <button onClick={(e) => removeTeaImage(tea, i)}>del</button>
          </div>
        </div>
      ))}
      <button onClick={(e) => mark(tea)}>mark</button>
    </figure>
  );
};
