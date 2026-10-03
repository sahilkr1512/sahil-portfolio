import Link from "next/link";
export default function NotFound() {
  return (<main className="grid min-h-screen place-items-center px-5 text-center"><div>
    <p className="text-7xl font-bold text-acc">404</p>
    <p className="mt-3 text-mute">Looks like this page got lost in the stack.</p>
    <Link href="/" className="mt-6 inline-block rounded bg-fg px-5 py-3 font-medium text-bg">Back home</Link></div></main>);
}
