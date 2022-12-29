import Head from "next/head";
import Script from "next/script"
import Login from "../Components/Login";
export default function Home() {
    return (
        <>
            <Head>
                <title>YourFit</title>
                <meta name="description" content="Outfit Generator App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </>
    );
}
