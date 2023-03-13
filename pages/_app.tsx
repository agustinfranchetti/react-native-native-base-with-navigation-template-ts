import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import BottomBar from "@/components/ui/BottomBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <BottomBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
