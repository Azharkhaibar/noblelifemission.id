import { ChakraProvider } from "@chakra-ui/react";
import Theme from "@/themes";
import './globals/globals.scss'
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={Theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
