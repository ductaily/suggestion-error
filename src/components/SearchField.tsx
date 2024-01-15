import "@ui5/webcomponents/dist/features/InputSuggestions.js"

import { Input, SuggestionItem } from "@ui5/webcomponents-react";

export default function SearchField(props: object) {
    return <Input showSuggestions {...props}>
                <SuggestionItem key="test" additionalText="Test text" text="Some Text" />
            </Input>
}