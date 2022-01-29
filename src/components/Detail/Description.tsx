export function replaceWithGlowHtml(target: string, source: string) {
  const regex = new RegExp(target, "g");
  const glowTitle = `<span class="glow">${target}</span>`;
  const descriptionGlow = source.replace(regex, glowTitle);
  return descriptionGlow;
}
type Props = {
  description: string;
  glowText: string;
};

export const Description = ({ description, glowText }: Props) => {
  const descriptionGlow = replaceWithGlowHtml(glowText, description);
  const lines = descriptionGlow.split(".");
  const html = `
<p>
  ${lines.shift()}.
</p>
<p>
  ${lines.join(". ")}
</p>
  `;
  return (
    <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
  );
};
