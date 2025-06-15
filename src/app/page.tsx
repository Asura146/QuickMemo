import { auth, signIn } from "../../auth"
import { redirect } from "next/navigation"
import { Button } from "@heroui/button"
import { Card } from "@heroui/card"
import { Divider } from "@heroui/react"
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
      <div className="w-full h-screen bg-gray-100 dark:bg-linear-to-tr from-[#343434] to-[#151515] flex items-center justify-center">
        <Card className="w-90 h-90 shadow-2xl drop-shadow-[0_0_100px_rgba(96,96,96,0.9)] dark:bg-gray-950 bg-white flex flex-col p-4">
          <h2 className="text-2xl font-bold  text-center text-black dark:text-white">ログイン</h2>
          <Divider className="my-4" />
          <div className="flex-1 flex items-center justify-center">
            <form
              action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/top" })
              }}
              className="p-4 flex items-center justify-center"
            >
              <Button type="submit" className="w-60 h-15 text-md ">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                Googleでログイン
              </Button>
            </form>
          </div>
        </Card>
      </div>
      <ThemeSwitcher />
    </>
  )
}
