import { ArchiveIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@permashelf/ui/button";
import { Separator } from "@permashelf/ui/separator";

import type { User } from "~/auth/client";

export function SiteHeader({ user }: { user?: User | null }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
        >
          <ArchiveIcon className="size-6" />
          <span className="text-xl">PermaShelf</span>
        </Link>

        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-sm text-muted-foreground">{user.email}</span>
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
