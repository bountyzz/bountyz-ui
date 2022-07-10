import Head from 'next/head'
import dynamic from "next/dynamic";

const Login = dynamic(() => import("../components/login"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Head>
        <title>Bountyz</title>
        <meta name="description" content="All-in-one crypto rewards & incentives platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="body">
        <a>
          <span className="flex items-center justify-center">
            <img src="/bountyz.jpg" alt="bountyz Logo" width={500} height={275} />
          </span>
        </a>
        <p className="text-3xl font-bold">
        All-in-one crypto rewards & incentives platform 
        </p>
        <br></br>
        <span className="flex items-center justify-center">
        <Login/>
        </span>
      </main>
    </div>
  );
}