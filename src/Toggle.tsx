import { Dispatch, SetStateAction } from "react";

interface ToggleProps {
  value: boolean;
  set: Dispatch<SetStateAction<boolean>>;
  label: string;
  classes?: string;
}

export const Toggle = ({ value, label, set, classes = '' }: ToggleProps) => (
  <button
    className={`button toggle ${value ? 'checked' : ''} ${classes}`}
    onClick={() => set(!value)}
  >
    {label}
  </button>
);
