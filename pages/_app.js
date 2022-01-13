import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import './../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Tip Smart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </Head>
    
    <SessionProvider
      options={{
        staleTime: 0,
        refetchInterval: 0,
      }}
      session={pageProps.session}
      >
      <Component {...pageProps} />
    </SessionProvider>
      </div>
  );
}

export default MyApp;