import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/setup">Set me up</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
