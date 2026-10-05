import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

/** List item that lifts on hover and dims its siblings inside a `group/list`. */
export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100! ${className}`}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface/50 lg:group-hover:inset-shadow-card lg:group-hover:drop-shadow-lg" />
      {children}
    </div>
  );
}
