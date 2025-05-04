
import { auth, signIn } from "../../auth"
import { redirect } from "next/navigation"
 
export default async function SignIn() {
  // ログインしているかどうかを確認
  const session = await auth();
  if (session) {
    // If the user is already authenticated, redirect them to the top page
    return redirect("/top");
  }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/top" })
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 
