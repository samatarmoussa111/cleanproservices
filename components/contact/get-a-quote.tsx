import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GetAQuoteForm } from "./form";

interface Props {
  children: React.ReactNode;
}

export function GetAQuote({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[400px] sm:max-w-2xl overflow-y-scroll overflow-x-hidden max-h-screen">
        <DialogHeader>
          <DialogTitle>Get a Quote</DialogTitle>
          <DialogDescription className="max-w-[350px] sm:max-w-xl">
            Areas of Service Include but are not limited to: Portland, Lewiston,
            Auburn.
          </DialogDescription>
          <DialogDescription>
            You may also call us direct at{" "}
            <span className="font-extrabold text-primary">(220)216-9540</span>
          </DialogDescription>
        </DialogHeader>
        <GetAQuoteForm />
      </DialogContent>
    </Dialog>
  );
}
