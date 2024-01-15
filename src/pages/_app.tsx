import "normalize.css/normalize.css";

import type { AppProps } from "next/app";
import ShellBar from "src/components/ShellBar";
import { ThemeProvider } from "@ui5/webcomponents-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <ShellBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
