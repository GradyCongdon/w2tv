export function replaceWithGlowHtml(target: string, source: string) {
  const titleRegExp = new RegExp(target, "g");
  const glowTitle = `<span class="glow">${target}</span>`;
  const descriptionGlow = source
    .replace(/style="(.*?)"/g, "")
    .replace(titleRegExp, glowTitle);
  return descriptionGlow;
}
type Props = {
  description: string;
  glowText: string;
};

export const Description = ({ description, glowText }: Props) => {
  const descriptionGlow = replaceWithGlowHtml(glowText, description);
  return (
    <div
      className="description"
      dangerouslySetInnerHTML={{ __html: descriptionGlow }}
    />
  );
};
