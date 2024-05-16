"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 bg-background w-full flex flex-row items-center justify-start border py-4 px-12">
      <h3> Black Swan Linen</h3>
      <nav
        className={cn(
          "flex items-center gap-4 text-sm lg:gap-6 ml-10",
          className
        )}
        {...props}
      >
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/sales"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/sales" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Sales
        </Link>
        <Link
          href="/customers"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/customers" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Customers
        </Link>
        <Link
          href="/orders"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/orders" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Orders
        </Link>
      </nav>
    </div>
  );
}
