interface ButtonProps {
  text: string | HTMLElement;
  variant: string;
  disabled?: boolean;
  onclick?: () => void;
  className?: string;
}

export default ButtonProps;
