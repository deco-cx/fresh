import { createContext } from "preact";
import { useContext } from "preact/hooks";
export const HEAD_CONTEXT = createContext([]);
export function Head(props) {
    let context;
    try {
        context = useContext(HEAD_CONTEXT);
    }
    catch (err) {
        throw new Error("<Head> component is not supported in the browser, or during suspense renders.", { cause: err });
    }
    context.push(props.children);
    return null;
}
