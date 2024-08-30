import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import type { AppProps } from "next/app";



export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
