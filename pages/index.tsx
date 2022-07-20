import Head from 'next/head';
import dynamic from "next/dynamic";


const Login = dynamic(() => import("../components/login"), {
  ssr: false,
});

export default function App() {
  return (
    <section
    style={{
      backgroundImage: 'url(/bountyxbg-5.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    
    }}
  >
    <div className="flex flex-1 flex-col items-center justify-center">
      <Head>
        <title>Bountyz</title>
        <meta name="description" content="All in one platform for Crypto rewards and incentives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="section">
        <a>
          <span className="flex space-y-2 items-center justify-center mb-[8vh]">
            <img src="./logo9.png" alt="Bountyz Logo" width={400} height={175} />
          </span>
        </a>
        <p className="text-xxl text-[#0095d9] text-center mb-[8vh]">
          All in one platfrom for<span className="text-[#0095d9]"> Crypto rewards</span> and <span className="text-[#ea4335]">Incentives</span>
        </p>
        <br></br>
        <span className="flex items-center justify-center">
        <Login/>
        </span>
      </main>
    </div>
    </section>
    
  );
}