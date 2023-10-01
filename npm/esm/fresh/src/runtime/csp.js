import { createContext } from "preact";
import { useContext } from "preact/hooks";
export const SELF = "'self'";
export const UNSAFE_INLINE = "'unsafe-inline'";
export const UNSAFE_EVAL = "'unsafe-eval'";
export const UNSAFE_HASHES = "'unsafe-hashes'";
export const NONE = "'none'";
export const STRICT_DYNAMIC = "'strict-dynamic'";
export function nonce(val) {
    return `'nonce-${val}'`;
}
export const CSP_CONTEXT = createContext(undefined);
export function useCSP(mutator) {
    const csp = useContext(CSP_CONTEXT);
    if (csp) {
        mutator(csp);
    }
}
