import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  iconName: keyof typeof icons;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  action?: () => void;
}

export function ButtonIcon({ iconName, variant = "default", action }: Props) {
  const LucideIcon = icons[iconName];

  return (
    <Button onClick={action} variant={variant} size="icon">
      <LucideIcon className="h-4 w-4 " />
    </Button>
  );
}
