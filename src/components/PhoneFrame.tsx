import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

/** High-fidelity iPhone-style frame. Children should be the screen content (image/video). */
export const PhoneFrame = ({ children, className = "" }: PhoneFrameProps) => {
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full max-w-[320px] rounded-[3rem] bg-foreground p-3 shadow-2xl ring-1 ring-foreground/20 ${className}`}
    >
      {/* outer bezel highlight */}
      <div className="absolute inset-0 rounded-[3rem] ring-[3px] ring-inset ring-background/5 pointer-events-none" />
      {/* side buttons */}
      <span className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l bg-foreground/80" />
      <span className="absolute -left-[3px] top-40 h-16 w-[3px] rounded-l bg-foreground/80" />
      <span className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-r bg-foreground/80" />

      {/* screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-background">
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-foreground" />
        <div className="h-full w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;