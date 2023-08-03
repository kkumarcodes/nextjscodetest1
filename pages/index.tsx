import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export type HomeProps = {
  data: {
    title: string;
    image: string;
  }[];
};

export default function Home({ data = [] }: HomeProps) {
  return (
    <>
      <Head>
        <title>Onbrand Code Challenge</title>
        <meta name="description" content="Onbrand Code Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          {data.map((img) => {
            return (
              <li>
                <Link href={`images/${img.image}`}>{img.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Using Example Images
  const data = [
    { title: "Autumn Puppy", image: "remy1.jpg" },
    { title: "Sleepy Puppy", image: "remy2.jpg" },
    { title: "Snowy Puppy", image: "remy3.jpg" },
    { title: "Playful Puppy", image: "remy4.jpg" },
  ];

  return { props: { data } };
}
