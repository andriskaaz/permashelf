import Link from "next/link";
import { ArchiveIcon } from "lucide-react";

import { Button } from "@permashelf/ui/button";
import { Separator } from "@permashelf/ui/separator";

import type { User } from "~/auth/client";

export function SiteHeader({ user }: { user?: User | null }) {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-80"
        >
          <ArchiveIcon className="size-6" />
          <span className="text-xl">PermaShelf</span>
        </Link>

        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-muted-foreground text-sm">
                {user.email}
              </span>
              <Button variant="outline" size="sm" asChild>
                <Link href="/api/auth/sign-out">Sign Out</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
