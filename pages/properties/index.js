import React from "react";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react"

export default function Properties() {
    const { data: session, status } = useSession();

  return (
    <Layout>
      {!session && status !== "authenticated" && <div>no properties</div>}
      {session && status !== "unauthenticated" && <div>properties</div>}
    </Layout>
  );
}
