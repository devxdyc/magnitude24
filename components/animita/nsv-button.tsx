import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface ButtonTitleProps {
  /**
   * Button title
   */
  text: string;
}

export default function ExternalLinkButton({ text }: ButtonTitleProps) {
  return (
    <button className="text-md group flex items-center justify-center gap-0 rounded-md bg-transparent   text-white hover:cursor-pointer hover:text-primary">
      <span>{text}</span>
      <ArrowTopRightIcon
        height={15}
        width={15}
        className="opacity-75 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-primary group-hover:opacity-100"
      />
    </button>
  );
}
