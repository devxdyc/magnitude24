import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

interface IGetStartedButtonProps {
  text: string;
  className?: string;
}

export default function GetStartedButton({
  text = "Get started",
  className,
}: IGetStartedButtonProps) {
  return (
    <div className="">
      <button
        className={cn(
          "group flex  px-[20px] py-[10px] items-center justify-center gap-2 rounded-xl  bg-primary text-primary-foreground  font-bold transition-colors duration-100 ease-in-out hover:bg-transparent hover:text-primary  hover:shadow-[2px_2px_23px_1px_#e53e3e]",
          className
        )}
      >
        <span
          className={cn(
            "text-black px-2 text-xl  transition-colors duration-100 ease-in-out group-hover:text-primary "
          )}
        >
          {text}
        </span>
        <div
          className={cn(
            "relative flex h-7 w-9  items-center justify-center overflow-hidden rounded-full transition-transform duration-100"
          )}
        >
          <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
            <MoveRight
              size={16}
              className={cn(
                "size-6 transform p-1 text-orange-600 opacity-0 group-hover:opacity-100"
              )}
            />
            <MoveRight
              size={16}
              className={cn(
                "size-6 transform p-1 text-black opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0"
              )}
            />
          </div>
        </div>
      </button>
    </div>
  );
}
