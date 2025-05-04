import React from 'react';
import { signOut, auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Top() {
    // ログイン情報を取得
    const session = await auth(); 
    // ログインしていない場合はトップページにリダイレクト
    if (!session) {
        redirect("/");
    }

    return (
        <div>
            <h1>Welcome to the Top Page</h1>
            {session && (
                <p>ログイン中: {session.user?.email}</p>
            )}
            <form
                action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                }}
            >
                <button type="submit">Sign Out</button>
            </form>
        </div>
    );
};
