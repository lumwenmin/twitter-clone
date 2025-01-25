"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleLogIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session ? (
    <button onClick={handleLogOut}>Log Out</button>
  ) : (
    <button onClick={handleLogIn}>Log In</button>
  );
}
