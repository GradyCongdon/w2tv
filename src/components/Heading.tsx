export const Heading = ({ children }: any) => (
  <h1 className="heading" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{children}</h1>
);
