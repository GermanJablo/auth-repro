"use client";
import styles from "./index.module.css";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  );
}
