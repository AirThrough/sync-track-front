import { cn } from "~/shared/utils";
import { Loader2Icon } from "lucide-react";

export const UISpinner = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-8 animate-spin", className)}
      {...props}
    />
  );
};
