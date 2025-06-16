'use client'
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"
import { Image } from "@heroui/react"

export default function Header(){
    const {data:session,status} = useSession()

    return(
        <header className="fixed w-full bg-white dark:bg-black text-white flex justify-between item-center h-15 z-50">
            <h1 className="text-lg font-bold">QuickMemo</h1>
            {status === 'loading' ? (
        <p>読み込み中...</p>
      ) : session ? (
        <div className="flex items-center gap-4">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt="プロフィール画像"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          <span>{session.user?.name}</span>
          <button onClick={() => signOut({ redirectTo: "/" })}>ログアウト</button>
        </div>
      ) : (
        <button onClick={() => signIn('google')}>Googleでログイン</button>
      )}

        </header>
    )
}