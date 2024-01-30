import React from "react"
import { trpc } from "../utils/trpc"

export default function Homepage() {

  const hello = trpc.hello.useQuery({ text: 'client' });

  if (hello.isLoading || !hello.data) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  )
}

