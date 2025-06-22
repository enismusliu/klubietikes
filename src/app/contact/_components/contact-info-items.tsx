import React from "react";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  href: string;
  children: React.ReactNode;
}

export const ContactInfoItem: React.FC<Props> = ({
  icon: Icon,
  label,
  href,
  children,
}) => (
  <div className="flex items-center gap-3">
    <div className="h-20 min-w-20 text-primary bg-primary/10 flex items-center justify-center rounded-lg">
      <Icon className="w-7 h-7" />
    </div>
    <div>
      <p className="mb-1 text-sm text-black/50">{label}</p>
      <a href={href} className="text-sm font-medium hover:underline">
        {children}
      </a>
    </div>
  </div>
);
