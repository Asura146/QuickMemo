'use client'
import { useSession } from "next-auth/react"
import { signIn, signOut } from "../../auth"

export default function Header(){
    const {data:session,status} = useSession()

    return(
        <header className="p-4 bg-white dark:bg-gray-800 text-white flex justify-between item-center">
            <h1 className="text-lg font-bold">MyPage</h1>

        </header>
    )
}