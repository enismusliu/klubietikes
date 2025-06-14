"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0  z-40", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const pathname = usePathname();
  const home = pathname === "/";
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "100%",
      }}
      className={cn(
        "bg-white shadow-xs",
        home && "shadow-none bg-transparent",
        visible && "bg-white/80 backdrop-blur-md shadow-sm"
      )}
    >
      <div
        className={cn(
          " z-[60]  min-h-15 hidden  container  flex-row items-center justify-between  py-2 lg:flex ",

          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        " inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-400 transition duration-200  lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => {
        const isActive = pathname?.startsWith(item.link);
        return (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={cn(
              "relative px-4 py-2 text-",
              isActive && "font-bold cursor-default rounded-lg text-black"
            )}
            key={`link-${idx}`}
            href={item.link}
          >
            {hovered === idx && !isActive && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-lg bg-primary/5 "
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  const pathname = usePathname();
  const home = pathname === "/";
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 flex h-15  bg-white  py-2 lg:hidden shadow-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex container flex-row  items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-12 z-50 flex w-full flex-col items-center justify-center gap-4  bg-white p-4 pb-6  border-b-2 rounded-b-lg ",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? <IconX onClick={onClick} /> : <IconMenu2 onClick={onClick} />;
};

export const NavbarLogo = () => {
  return (
    <Link href="/" className="z-10">
      <img
        src="/images/icon.png"
        alt="Klubi i Etikës"
        className="h-8 object-contain"
      />
    </Link>
  );
};
