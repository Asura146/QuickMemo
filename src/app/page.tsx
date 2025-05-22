
import { auth, signIn } from "../../auth"
import { redirect } from "next/navigation"
import { Button } from "@heroui/button"
import  ThemeSwitcher  from "@/components/ThemeSwitcher";
 
export default async function SignIn() {
  // ログインしているかどうかを確認
  const session = await auth();
  if (session) {
    // If the user is already authenticated, redirect them to the top page
    return redirect("/top");
  }

  return (
    <>
      <form
        action={async () => {
          "use server"
          await signIn("google", { redirectTo: "/top" })
        }}
        className="bg-white dark:bg-gray-800 p-4 rounded shadow-md"
      >
        <Button type="submit">Signin with Google</Button>
      </form>
      <ThemeSwitcher />
    </>
  )
} 
