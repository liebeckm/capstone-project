import Heading from "../components/Heading";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Heading>landwaerts</Heading>
      <Link href="/rides-overview">Rides Overview</Link>
    </main>
  );
}
