var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Server_instances, _Server_port, _Server_host, _Server_handler, _Server_closed, _Server_listeners, _Server_acceptBackoffDelayAbortController, _Server_httpConnections, _Server_onError, _Server_respond, _Server_serveHttp, _Server_accept, _Server_closeHttpConn, _Server_trackListener, _Server_untrackListener, _Server_trackHttpConnection, _Server_untrackHttpConnection;
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.js";
import { delay } from "../async/mod.js";
/** Thrown by Server after it has been closed. */
const ERROR_SERVER_CLOSED = "Server closed";
/** Default port for serving HTTP. */
const HTTP_PORT = 80;
/** Default port for serving HTTPS. */
const HTTPS_PORT = 443;
/** Initial backoff delay of 5ms following a temporary accept failure. */
const INITIAL_ACCEPT_BACKOFF_DELAY = 5;
/** Max backoff delay of 1s following a temporary accept failure. */
const MAX_ACCEPT_BACKOFF_DELAY = 1000;
/** Used to construct an HTTP server. */
export class Server {
    /**
     * Constructs a new HTTP Server instance.
     *
     * ```ts
     * import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";
     *
     * const port = 4505;
     * const handler = (request: Request) => {
     *   const body = `Your user-agent is:\n\n${request.headers.get(
     *    "user-agent",
     *   ) ?? "Unknown"}`;
     *
     *   return new Response(body, { status: 200 });
     * };
     *
     * const server = new Server({ port, handler });
     * ```
     *
     * @param serverInit Options for running an HTTP server.
     */
    constructor(serverInit) {
        _Server_instances.add(this);
        _Server_port.set(this, void 0);
        _Server_host.set(this, void 0);
        _Server_handler.set(this, void 0);
        _Server_closed.set(this, false);
        _Server_listeners.set(this, new Set());
        _Server_acceptBackoffDelayAbortController.set(this, new AbortController());
        _Server_httpConnections.set(this, new Set());
        _Server_onError.set(this, void 0);
        __classPrivateFieldSet(this, _Server_port, serverInit.port, "f");
        __classPrivateFieldSet(this, _Server_host, serverInit.hostname, "f");
        __classPrivateFieldSet(this, _Server_handler, serverInit.handler, "f");
        __classPrivateFieldSet(this, _Server_onError, serverInit.onError ??
            function (error) {
                console.error(error);
                return new Response("Internal Server Error", { status: 500 });
            }, "f");
    }
    /**
     * Accept incoming connections on the given listener, and handle requests on
     * these connections with the given handler.
     *
     * HTTP/2 support is only enabled if the provided Deno.Listener returns TLS
     * connections and was configured with "h2" in the ALPN protocols.
     *
     * Throws a server closed error if called after the server has been closed.
     *
     * Will always close the created listener.
     *
     * ```ts
     * import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";
     *
     * const handler = (request: Request) => {
     *   const body = `Your user-agent is:\n\n${request.headers.get(
     *    "user-agent",
     *   ) ?? "Unknown"}`;
     *
     *   return new Response(body, { status: 200 });
     * };
     *
     * const server = new Server({ handler });
     * const listener = Deno.listen({ port: 4505 });
     *
     * console.log("server listening on http://localhost:4505");
     *
     * await server.serve(listener);
     * ```
     *
     * @param listener The listener to accept connections from.
     */
    async serve(listener) {
        if (__classPrivateFieldGet(this, _Server_closed, "f")) {
            throw new dntShim.Deno.errors.Http(ERROR_SERVER_CLOSED);
        }
        __classPrivateFieldGet(this, _Server_instances, "m", _Server_trackListener).call(this, listener);
        try {
            return await __classPrivateFieldGet(this, _Server_instances, "m", _Server_accept).call(this, listener);
        }
        finally {
            __classPrivateFieldGet(this, _Server_instances, "m", _Server_untrackListener).call(this, listener);
            try {
                listener.close();
            }
            catch {
                // Listener has already been closed.
            }
        }
    }
    /**
     * Create a listener on the server, accept incoming connections, and handle
     * requests on these connections with the given handler.
     *
     * If the server was constructed without a specified port, 80 is used.
     *
     * If the server was constructed with the hostname omitted from the options, the
     * non-routable meta-address `0.0.0.0` is used.
     *
     * Throws a server closed error if the server has been closed.
     *
     * ```ts
     * import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";
     *
     * const port = 4505;
     * const handler = (request: Request) => {
     *   const body = `Your user-agent is:\n\n${request.headers.get(
     *    "user-agent",
     *   ) ?? "Unknown"}`;
     *
     *   return new Response(body, { status: 200 });
     * };
     *
     * const server = new Server({ port, handler });
     *
     * console.log("server listening on http://localhost:4505");
     *
     * await server.listenAndServe();
     * ```
     */
    async listenAndServe() {
        if (__classPrivateFieldGet(this, _Server_closed, "f")) {
            throw new dntShim.Deno.errors.Http(ERROR_SERVER_CLOSED);
        }
        const listener = dntShim.Deno.listen({
            port: __classPrivateFieldGet(this, _Server_port, "f") ?? HTTP_PORT,
            hostname: __classPrivateFieldGet(this, _Server_host, "f") ?? "0.0.0.0",
            transport: "tcp",
        });
        return await this.serve(listener);
    }
    /**
     * Create a listener on the server, accept incoming connections, upgrade them
     * to TLS, and handle requests on these connections with the given handler.
     *
     * If the server was constructed without a specified port, 443 is used.
     *
     * If the server was constructed with the hostname omitted from the options, the
     * non-routable meta-address `0.0.0.0` is used.
     *
     * Throws a server closed error if the server has been closed.
     *
     * ```ts
     * import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";
     *
     * const port = 4505;
     * const handler = (request: Request) => {
     *   const body = `Your user-agent is:\n\n${request.headers.get(
     *    "user-agent",
     *   ) ?? "Unknown"}`;
     *
     *   return new Response(body, { status: 200 });
     * };
     *
     * const server = new Server({ port, handler });
     *
     * const certFile = "/path/to/certFile.crt";
     * const keyFile = "/path/to/keyFile.key";
     *
     * console.log("server listening on https://localhost:4505");
     *
     * await server.listenAndServeTls(certFile, keyFile);
     * ```
     *
     * @param certFile The path to the file containing the TLS certificate.
     * @param keyFile The path to the file containing the TLS private key.
     */
    async listenAndServeTls(certFile, keyFile) {
        if (__classPrivateFieldGet(this, _Server_closed, "f")) {
            throw new dntShim.Deno.errors.Http(ERROR_SERVER_CLOSED);
        }
        const listener = dntShim.Deno.listenTls({
            port: __classPrivateFieldGet(this, _Server_port, "f") ?? HTTPS_PORT,
            hostname: __classPrivateFieldGet(this, _Server_host, "f") ?? "0.0.0.0",
            certFile,
            keyFile,
            transport: "tcp",
            // ALPN protocol support not yet stable.
            // alpnProtocols: ["h2", "http/1.1"],
        });
        return await this.serve(listener);
    }
    /**
     * Immediately close the server listeners and associated HTTP connections.
     *
     * Throws a server closed error if called after the server has been closed.
     */
    close() {
        if (__classPrivateFieldGet(this, _Server_closed, "f")) {
            throw new dntShim.Deno.errors.Http(ERROR_SERVER_CLOSED);
        }
        __classPrivateFieldSet(this, _Server_closed, true, "f");
        for (const listener of __classPrivateFieldGet(this, _Server_listeners, "f")) {
            try {
                listener.close();
            }
            catch {
                // Listener has already been closed.
            }
        }
        __classPrivateFieldGet(this, _Server_listeners, "f").clear();
        __classPrivateFieldGet(this, _Server_acceptBackoffDelayAbortController, "f").abort();
        for (const httpConn of __classPrivateFieldGet(this, _Server_httpConnections, "f")) {
            __classPrivateFieldGet(this, _Server_instances, "m", _Server_closeHttpConn).call(this, httpConn);
        }
        __classPrivateFieldGet(this, _Server_httpConnections, "f").clear();
    }
    /** Get whether the server is closed. */
    get closed() {
        return __classPrivateFieldGet(this, _Server_closed, "f");
    }
    /** Get the list of network addresses the server is listening on. */
    get addrs() {
        return Array.from(__classPrivateFieldGet(this, _Server_listeners, "f")).map((listener) => listener.addr);
    }
}
_Server_port = new WeakMap(), _Server_host = new WeakMap(), _Server_handler = new WeakMap(), _Server_closed = new WeakMap(), _Server_listeners = new WeakMap(), _Server_acceptBackoffDelayAbortController = new WeakMap(), _Server_httpConnections = new WeakMap(), _Server_onError = new WeakMap(), _Server_instances = new WeakSet(), _Server_respond = 
/**
 * Responds to an HTTP request.
 *
 * @param requestEvent The HTTP request to respond to.
 * @param connInfo Information about the underlying connection.
 */
async function _Server_respond(requestEvent, connInfo) {
    let response;
    try {
        // Handle the request event, generating a response.
        response = await __classPrivateFieldGet(this, _Server_handler, "f").call(this, requestEvent.request, connInfo);
        if (response.bodyUsed && response.body !== null) {
            throw new TypeError("Response body already consumed.");
        }
    }
    catch (error) {
        // Invoke onError handler when request handler throws.
        response = await __classPrivateFieldGet(this, _Server_onError, "f").call(this, error);
    }
    try {
        // Send the response.
        await requestEvent.respondWith(response);
    }
    catch {
        // `respondWith()` can throw for various reasons, including downstream and
        // upstream connection errors, as well as errors thrown during streaming
        // of the response content.  In order to avoid false negatives, we ignore
        // the error here and let `serveHttp` close the connection on the
        // following iteration if it is in fact a downstream connection error.
    }
}, _Server_serveHttp = 
/**
 * Serves all HTTP requests on a single connection.
 *
 * @param httpConn The HTTP connection to yield requests from.
 * @param connInfo Information about the underlying connection.
 */
async function _Server_serveHttp(httpConn, connInfo) {
    while (!__classPrivateFieldGet(this, _Server_closed, "f")) {
        let requestEvent;
        try {
            // Yield the new HTTP request on the connection.
            requestEvent = await httpConn.nextRequest();
        }
        catch {
            // Connection has been closed.
            break;
        }
        if (requestEvent === null) {
            // Connection has been closed.
            break;
        }
        // Respond to the request. Note we do not await this async method to
        // allow the connection to handle multiple requests in the case of h2.
        __classPrivateFieldGet(this, _Server_instances, "m", _Server_respond).call(this, requestEvent, connInfo);
    }
    __classPrivateFieldGet(this, _Server_instances, "m", _Server_closeHttpConn).call(this, httpConn);
}, _Server_accept = 
/**
 * Accepts all connections on a single network listener.
 *
 * @param listener The listener to accept connections from.
 */
async function _Server_accept(listener) {
    let acceptBackoffDelay;
    while (!__classPrivateFieldGet(this, _Server_closed, "f")) {
        let conn;
        try {
            // Wait for a new connection.
            conn = await listener.accept();
        }
        catch (error) {
            if (
            // The listener is closed.
            error instanceof dntShim.Deno.errors.BadResource ||
                // TLS handshake errors.
                error instanceof dntShim.Deno.errors.InvalidData ||
                error instanceof dntShim.Deno.errors.UnexpectedEof ||
                error instanceof dntShim.Deno.errors.ConnectionReset ||
                error instanceof dntShim.Deno.errors.NotConnected) {
                // Backoff after transient errors to allow time for the system to
                // recover, and avoid blocking up the event loop with a continuously
                // running loop.
                if (!acceptBackoffDelay) {
                    acceptBackoffDelay = INITIAL_ACCEPT_BACKOFF_DELAY;
                }
                else {
                    acceptBackoffDelay *= 2;
                }
                if (acceptBackoffDelay >= MAX_ACCEPT_BACKOFF_DELAY) {
                    acceptBackoffDelay = MAX_ACCEPT_BACKOFF_DELAY;
                }
                try {
                    await delay(acceptBackoffDelay, {
                        signal: __classPrivateFieldGet(this, _Server_acceptBackoffDelayAbortController, "f").signal,
                    });
                }
                catch (err) {
                    // The backoff delay timer is aborted when closing the server.
                    if (!(err instanceof DOMException && err.name === "AbortError")) {
                        throw err;
                    }
                }
                continue;
            }
            throw error;
        }
        acceptBackoffDelay = undefined;
        // "Upgrade" the network connection into an HTTP connection.
        let httpConn;
        try {
            httpConn = dntShim.Deno.serveHttp(conn);
        }
        catch {
            // Connection has been closed.
            continue;
        }
        // Closing the underlying listener will not close HTTP connections, so we
        // track for closure upon server close.
        __classPrivateFieldGet(this, _Server_instances, "m", _Server_trackHttpConnection).call(this, httpConn);
        const connInfo = {
            localAddr: conn.localAddr,
            remoteAddr: conn.remoteAddr,
        };
        // Serve the requests that arrive on the just-accepted connection. Note
        // we do not await this async method to allow the server to accept new
        // connections.
        __classPrivateFieldGet(this, _Server_instances, "m", _Server_serveHttp).call(this, httpConn, connInfo);
    }
}, _Server_closeHttpConn = function _Server_closeHttpConn(httpConn) {
    __classPrivateFieldGet(this, _Server_instances, "m", _Server_untrackHttpConnection).call(this, httpConn);
    try {
        httpConn.close();
    }
    catch {
        // Connection has already been closed.
    }
}, _Server_trackListener = function _Server_trackListener(listener) {
    __classPrivateFieldGet(this, _Server_listeners, "f").add(listener);
}, _Server_untrackListener = function _Server_untrackListener(listener) {
    __classPrivateFieldGet(this, _Server_listeners, "f").delete(listener);
}, _Server_trackHttpConnection = function _Server_trackHttpConnection(httpConn) {
    __classPrivateFieldGet(this, _Server_httpConnections, "f").add(httpConn);
}, _Server_untrackHttpConnection = function _Server_untrackHttpConnection(httpConn) {
    __classPrivateFieldGet(this, _Server_httpConnections, "f").delete(httpConn);
};
/**
 * Constructs a server, accepts incoming connections on the given listener, and
 * handles requests on these connections with the given handler.
 *
 * ```ts
 * import { serveListener } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 *
 * const listener = Deno.listen({ port: 4505 });
 *
 * console.log("server listening on http://localhost:4505");
 *
 * await serveListener(listener, (request) => {
 *   const body = `Your user-agent is:\n\n${request.headers.get(
 *     "user-agent",
 *   ) ?? "Unknown"}`;
 *
 *   return new Response(body, { status: 200 });
 * });
 * ```
 *
 * @param listener The listener to accept connections from.
 * @param handler The handler for individual HTTP requests.
 * @param options Optional serve options.
 */
export async function serveListener(listener, handler, options) {
    const server = new Server({ handler, onError: options?.onError });
    options?.signal?.addEventListener("abort", () => server.close(), {
        once: true,
    });
    return await server.serve(listener);
}
function hostnameForDisplay(hostname) {
    // If the hostname is "0.0.0.0", we display "localhost" in console
    // because browsers in Windows don't resolve "0.0.0.0".
    // See the discussion in https://github.com/denoland/deno_std/issues/1165
    return hostname === "0.0.0.0" ? "localhost" : hostname;
}
/** Serves HTTP requests with the given handler.
 *
 * You can specify an object with a port and hostname option, which is the
 * address to listen on. The default is port 8000 on hostname "0.0.0.0".
 *
 * The below example serves with the port 8000.
 *
 * ```ts
 * import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * serve((_req) => new Response("Hello, world"));
 * ```
 *
 * You can change the listening address by the `hostname` and `port` options.
 * The below example serves with the port 3000.
 *
 * ```ts
 * import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * serve((_req) => new Response("Hello, world"), { port: 3000 });
 * ```
 *
 * `serve` function prints the message `Listening on http://<hostname>:<port>/`
 * on start-up by default. If you like to change this message, you can specify
 * `onListen` option to override it.
 *
 * ```ts
 * import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * serve((_req) => new Response("Hello, world"), {
 *   onListen({ port, hostname }) {
 *     console.log(`Server started at http://${hostname}:${port}`);
 *     // ... more info specific to your server ..
 *   },
 * });
 * ```
 *
 * You can also specify `undefined` or `null` to stop the logging behavior.
 *
 * ```ts
 * import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * serve((_req) => new Response("Hello, world"), { onListen: undefined });
 * ```
 *
 * @param handler The handler for individual HTTP requests.
 * @param options The options. See `ServeInit` documentation for details.
 */
export async function serve(handler, options = {}) {
    let port = options.port ?? 8000;
    const hostname = options.hostname ?? "0.0.0.0";
    const server = new Server({
        port,
        hostname,
        handler,
        onError: options.onError,
    });
    options?.signal?.addEventListener("abort", () => server.close(), {
        once: true,
    });
    const listener = dntShim.Deno.listen({
        port,
        hostname,
        transport: "tcp",
    });
    const s = server.serve(listener);
    port = server.addrs[0].port;
    if ("onListen" in options) {
        options.onListen?.({ port, hostname });
    }
    else {
        console.log(`Listening on http://${hostnameForDisplay(hostname)}:${port}/`);
    }
    return await s;
}
/** Serves HTTPS requests with the given handler.
 *
 * You must specify `key` or `keyFile` and `cert` or `certFile` options.
 *
 * You can specify an object with a port and hostname option, which is the
 * address to listen on. The default is port 8443 on hostname "0.0.0.0".
 *
 * The below example serves with the default port 8443.
 *
 * ```ts
 * import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 *
 * const cert = "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n";
 * const key = "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n";
 * serveTls((_req) => new Response("Hello, world"), { cert, key });
 *
 * // Or
 *
 * const certFile = "/path/to/certFile.crt";
 * const keyFile = "/path/to/keyFile.key";
 * serveTls((_req) => new Response("Hello, world"), { certFile, keyFile });
 * ```
 *
 * `serveTls` function prints the message `Listening on https://<hostname>:<port>/`
 * on start-up by default. If you like to change this message, you can specify
 * `onListen` option to override it.
 *
 * ```ts
 * import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * const certFile = "/path/to/certFile.crt";
 * const keyFile = "/path/to/keyFile.key";
 * serveTls((_req) => new Response("Hello, world"), {
 *   certFile,
 *   keyFile,
 *   onListen({ port, hostname }) {
 *     console.log(`Server started at https://${hostname}:${port}`);
 *     // ... more info specific to your server ..
 *   },
 * });
 * ```
 *
 * You can also specify `undefined` or `null` to stop the logging behavior.
 *
 * ```ts
 * import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * const certFile = "/path/to/certFile.crt";
 * const keyFile = "/path/to/keyFile.key";
 * serveTls((_req) => new Response("Hello, world"), {
 *   certFile,
 *   keyFile,
 *   onListen: undefined,
 * });
 * ```
 *
 * @param handler The handler for individual HTTPS requests.
 * @param options The options. See `ServeTlsInit` documentation for details.
 * @returns
 */
export async function serveTls(handler, options) {
    if (!options.key && !options.keyFile) {
        throw new Error("TLS config is given, but 'key' is missing.");
    }
    if (!options.cert && !options.certFile) {
        throw new Error("TLS config is given, but 'cert' is missing.");
    }
    let port = options.port ?? 8443;
    const hostname = options.hostname ?? "0.0.0.0";
    const server = new Server({
        port,
        hostname,
        handler,
        onError: options.onError,
    });
    options?.signal?.addEventListener("abort", () => server.close(), {
        once: true,
    });
    const key = options.key || dntShim.Deno.readTextFileSync(options.keyFile);
    const cert = options.cert || dntShim.Deno.readTextFileSync(options.certFile);
    const listener = dntShim.Deno.listenTls({
        port,
        hostname,
        cert,
        key,
        transport: "tcp",
        // ALPN protocol support not yet stable.
        // alpnProtocols: ["h2", "http/1.1"],
    });
    const s = server.serve(listener);
    port = server.addrs[0].port;
    if ("onListen" in options) {
        options.onListen?.({ port, hostname });
    }
    else {
        console.log(`Listening on https://${hostnameForDisplay(hostname)}:${port}/`);
    }
    return await s;
}
