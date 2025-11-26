import Link from "next/link";
import {
  ArchiveIcon,
  BrainIcon,
  CheckIcon,
  LockIcon,
  SearchIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";
import * as motion from "motion/react-client";

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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 md:py-32">
        {/* Animated Background Gradient */}
        <div className="from-primary/5 via-background to-background absolute inset-0 -z-10 bg-linear-to-b" />

        {/* Decorative Blur Circles */}
        <motion.div
          className="bg-primary/20 absolute top-1/4 -left-1/4 -z-10 size-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-primary/10 absolute -right-1/4 bottom-1/4 -z-10 size-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="mx-auto w-full max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              <SparklesIcon className="mr-1.5 size-3.5" />
              AI-Powered Archive
            </Badge>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Your Personal, Permanent
            <br />
            <span className="from-primary via-primary/80 to-primary/60 bg-linear-to-r bg-clip-text text-transparent">
              Knowledge Library
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            PermaShelf automatically scrapes, cleans, and stores permanent
            copies of any web page. Even if the original disappears, your
            version stays safe and accessible forever.
          </motion.p>

          {/* URL Input Section */}
          <motion.div
            className="mx-auto mb-8 flex w-full max-w-2xl flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="sm:flex-1"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <Input
                type="url"
                placeholder="Paste any URL to save..."
                className="focus:border-primary h-14 w-full border-2 text-base shadow-lg transition-all hover:shadow-xl"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="h-14 px-8 shadow-lg">
                <ZapIcon className="mr-2 size-5" />
                Save Now
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {[
              "One-click saving",
              "Permanent copies",
              "AI-powered organization",
            ].map((text, index) => (
              <motion.div
                key={text}
                className="text-muted-foreground flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <CheckIcon className="text-primary size-4" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator className="mx-auto w-full max-w-6xl" />

      {/* Features Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Build
              <br />
              <span className="from-foreground to-foreground/70 bg-linear-to-r bg-clip-text text-transparent">
                Your Knowledge Base
              </span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              PermaShelf turns the fragile, ever-changing web into a private,
              permanent library that's organized for you by AI.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ZapIcon,
                title: "One-Click Saving",
                description:
                  "Paste a URL and instantly capture the full content. No complicated setup, no manual work—just save and go.",
              },
              {
                icon: ArchiveIcon,
                title: "Permanent Copies",
                description:
                  "Keep your own version even if the original site disappears or changes. Your content is safe, forever.",
              },
              {
                icon: BrainIcon,
                title: "AI-Powered Organization",
                description:
                  "Automatic categorization and smart suggestions for folders and tags. The AI understands what you save and organizes it intelligently.",
              },
              {
                icon: SparklesIcon,
                title: "Custom Structure",
                description:
                  "Create and rename your own categories to match your workflow. Organize your way, with AI assistance when you need it.",
              },
              {
                icon: LockIcon,
                title: "Private by Design",
                description:
                  "Each account lives in its own isolated database. Your data stays yours—no one else can access or search your content.",
              },
              {
                icon: SearchIcon,
                title: "Fast Search",
                description:
                  "Find any saved page by title, content, or category in seconds. Your entire knowledge base is instantly searchable.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="h-full"
                    initial="rest"
                    whileHover="hover"
                    variants={{
                      rest: { y: 0, scale: 1 },
                      hover: { y: -5, scale: 1.02 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="group hover:border-primary/50 hover:shadow-primary/5 h-full transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <motion.div
                          className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex size-12 items-center justify-center rounded-lg transition-colors duration-300"
                          variants={{
                            rest: { rotate: 0 },
                            hover: { rotate: [0, -10, 10, 0] },
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="text-primary size-6" />
                        </motion.div>
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-full max-w-6xl" />

      {/* How It Works Section */}
      <section className="bg-muted/30 px-4 py-20 md:py-32">
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How PermaShelf Works
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Over time, PermaShelf becomes a searchable, well-organized
              knowledge base tailored to how you think.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                number: 1,
                title: "Save Any URL",
                description:
                  "Paste any URL and PermaShelf automatically scrapes the content, cleans it up, and stores a permanent copy under your account.",
              },
              {
                number: 2,
                title: "AI Reads & Understands",
                description:
                  "Our built-in AI reads what you save, understands the topic, and categorizes everything for you. Create your own custom categories, or let the AI suggest smart folders based on what the content is actually about.",
              },
              {
                number: 3,
                title: "Your Private Library",
                description:
                  "Your saved pages, notes, and categories are visible only to you. No one else can access or search your content—unless you share them with someone else.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="group bg-card hover:border-primary/50 flex flex-col gap-4 rounded-lg border p-6 transition-all duration-300 hover:shadow-md sm:flex-row sm:items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="bg-primary text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-full font-semibold shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-muted/50 via-muted/30 to-background relative overflow-hidden bg-linear-to-b px-4 py-20 md:py-32">
        {/* Decorative Elements */}
        <motion.div
          className="bg-primary/10 absolute top-0 left-1/4 -z-10 size-64 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-primary/10 absolute right-1/4 bottom-0 -z-10 size-64 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="mx-auto w-full max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Start Building Your{" "}
            <span className="from-primary to-primary/70 bg-linear-to-r bg-clip-text text-transparent">
              Permanent Archive
            </span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Join PermaShelf and turn the web into your personal, organized
            knowledge base.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="h-12 px-8 shadow-lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
