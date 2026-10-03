"use client";
import Link from "next/link";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (<main className="grid min-h-screen place-items-center px-5 text-center"><div>
    <p className="text-7xl font-bold text-acc">500</p>
    <p className="mt-3 text-mute">Something went wrong.</p>
    <div className="mt-6 flex justify-center gap-3">
      <button onClick={reset} className="rounded bg-fg px-5 py-3 font-medium text-bg">Try again</button>
      <Link href="/" className="rounded border border-line px-5 py-3 font-medium">Back home</Link></div></div></main>);
}
