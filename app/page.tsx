import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/loginButton";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-between p-24">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-3xl", font.className)}>Hello Auth 👋</h1>
        <div>
          <LoginButton>
            <Button>Sign In</Button>
          </LoginButton>
        </div>
      </div>
      <span className="">
        this project created to you by{" "}
        <strong className="cursor-pointer hover:underline">abusamir</strong>
      </span>
    </main>
  );
}
