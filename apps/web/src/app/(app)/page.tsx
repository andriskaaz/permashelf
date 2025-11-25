import {
  ArchiveIcon,
  BrainIcon,
  LockIcon,
  SearchIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@permashelf/ui/badge";
import { Button } from "@permashelf/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@permashelf/ui/card";
import { Input } from "@permashelf/ui/input";
import { Separator } from "@permashelf/ui/separator";

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 md:py-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 text-sm font-medium"
          >
            AI-Powered Archive
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your Personal, Permanent
            <br />
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Knowledge Library
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
            PermaShelf automatically scrapes, cleans, and stores permanent copies
            of any web page. Even if the original disappears, your version stays
            safe and accessible forever.
          </p>

          {/* URL Input Section */}
          <div className="mx-auto mb-8 flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
            <Input
              type="url"
              placeholder="Paste any URL to save..."
              className="h-12 text-base sm:flex-1"
            />
            <Button size="lg" className="h-12 px-8">
              <ZapIcon className="mr-2 size-5" />
              Save Now
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            One-click saving • Permanent copies • AI-powered organization
          </p>
        </div>
      </section>

      <Separator className="mx-auto w-full max-w-6xl" />

      {/* Features Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Build
              <br />
              Your Knowledge Base
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              PermaShelf turns the fragile, ever-changing web into a private,
              permanent library that's organized for you by AI.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <ZapIcon className="size-6 text-primary" />
                </div>
                <CardTitle>One-Click Saving</CardTitle>
                <CardDescription>
                  Paste a URL and instantly capture the full content. No
                  complicated setup, no manual work—just save and go.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <ArchiveIcon className="size-6 text-primary" />
                </div>
                <CardTitle>Permanent Copies</CardTitle>
                <CardDescription>
                  Keep your own version even if the original site disappears or
                  changes. Your content is safe, forever.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <BrainIcon className="size-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Organization</CardTitle>
                <CardDescription>
                  Automatic categorization and smart suggestions for folders and
                  tags. The AI understands what you save and organizes it
                  intelligently.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <SparklesIcon className="size-6 text-primary" />
                </div>
                <CardTitle>Custom Structure</CardTitle>
                <CardDescription>
                  Create and rename your own categories to match your workflow.
                  Organize your way, with AI assistance when you need it.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <LockIcon className="size-6 text-primary" />
                </div>
                <CardTitle>Private by Design</CardTitle>
                <CardDescription>
                  Each account lives in its own isolated database. Your data
                  stays yours—no one else can access or search your content.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <SearchIcon className="size-6 text-primary" />
                </div>
                <CardTitle>Fast Search</CardTitle>
                <CardDescription>
                  Find any saved page by title, content, or category in seconds.
                  Your entire knowledge base is instantly searchable.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-full max-w-6xl" />

      {/* How It Works Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How PermaShelf Works
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Over time, PermaShelf becomes a searchable, well-organized
              knowledge base tailored to how you think.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                1
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold">Save Any URL</h3>
                <p className="text-muted-foreground">
                  Paste any URL and PermaShelf automatically scrapes the
                  content, cleans it up, and stores a permanent copy under your
                  account.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                2
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold">
                  AI Reads & Understands
                </h3>
                <p className="text-muted-foreground">
                  Our built-in AI reads what you save, understands the topic,
                  and categorizes everything for you. Create your own custom
                  categories, or let the AI suggest smart folders based on what
                  the content is actually about.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                3
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold">
                  Your Private Library
                </h3>
                <p className="text-muted-foreground">
                  Your saved pages, notes, and categories are visible only to
                  you. No one else can access or search your content—unless you
                  share them with someone else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 px-4 py-20 md:py-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Start Building Your Permanent Archive
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join PermaShelf and turn the web into your personal, organized
            knowledge base.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
