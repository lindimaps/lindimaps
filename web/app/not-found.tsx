import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page">
    <div>
      <p className="eyebrow">404 / LINDIMAPS</p>
      <h1>Beyond this map.</h1>
      <p>The page you are looking for could not be found.</p>
      <Link href="/">Return home <span>→</span></Link>
    </div>
  </main>;
}