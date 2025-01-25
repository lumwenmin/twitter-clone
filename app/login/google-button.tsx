"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FaGoogle } from "react-icons/fa";

export default function GoogleButton() {
  const supabase = createClientComponentClient<Database>();
  const handleLogIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <div className="flex-col justify-items-center">
      <button
        onClick={handleLogIn}
        className="hover:bg-gray-800 p-8 rounded-xl"
      >
        <FaGoogle size={100} />
      </button>
      <p>Log in with Google</p>
    </div>
  );
}
