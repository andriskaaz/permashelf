import { SpeedInsights } from "@vercel/speed-insights/next";

import { getSession } from "~/auth/server";
import { SiteHeader } from "~/components/layout/site-header";
import { SiteFooter } from "~/components/layout/site-footer";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="font-inter bg-background relative z-10 flex min-h-svh flex-col dark:bg-slate-900">
      <SiteHeader user={session?.user} />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
      <SpeedInsights />
    </div>
  );
}
