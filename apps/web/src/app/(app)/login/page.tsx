import { redirect } from "next/navigation";

import { getSession } from "~/auth/server";
import { LoginForm } from "~/components/public/login-form";

export default async function LoginPage() {
  const session = await getSession();

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
