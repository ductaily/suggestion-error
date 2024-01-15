import { ShellBar as ShellBarUi5 } from "@ui5/webcomponents-react";
import dynamic from "next/dynamic";

const SearchField = dynamic(() => import("./SearchField"), {
    ssr: false
})

export default function ShellBar() {

    return <ShellBarUi5
      primaryTitle="Test"
        searchField={<SearchField />}
    /> 
}