/**
 * Contains the enum {@linkcode Status} which enumerates standard HTTP status
 * codes and provides several type guards for handling status codes with type
 * safety.
 *
 * @example
 * ```ts
 * import {
 *   Status,
 *   STATUS_TEXT,
 * } from "https://deno.land/std@$STD_VERSION/http/http_status.ts";
 *
 * console.log(Status.NotFound); //=> 404
 * console.log(STATUS_TEXT[Status.NotFound]); //=> "Not Found"
 * ```
 *
 * ```ts
 * import { isErrorStatus } from "https://deno.land/std@$STD_VERSION/http/http_status.ts";
 *
 * const res = await fetch("https://example.com/");
 *
 * if (isErrorStatus(res.status)) {
 *   // error handling here...
 * }
 * ```
 *
 * @module
 */
/** Standard HTTP status codes. */
export declare enum Status {
    /** RFC 7231, 6.2.1 */
    Continue = 100,
    /** RFC 7231, 6.2.2 */
    SwitchingProtocols = 101,
    /** RFC 2518, 10.1 */
    Processing = 102,
    /** RFC 8297 **/
    EarlyHints = 103,
    /** RFC 7231, 6.3.1 */
    OK = 200,
    /** RFC 7231, 6.3.2 */
    Created = 201,
    /** RFC 7231, 6.3.3 */
    Accepted = 202,
    /** RFC 7231, 6.3.4 */
    NonAuthoritativeInfo = 203,
    /** RFC 7231, 6.3.5 */
    NoContent = 204,
    /** RFC 7231, 6.3.6 */
    ResetContent = 205,
    /** RFC 7233, 4.1 */
    PartialContent = 206,
    /** RFC 4918, 11.1 */
    MultiStatus = 207,
    /** RFC 5842, 7.1 */
    AlreadyReported = 208,
    /** RFC 3229, 10.4.1 */
    IMUsed = 226,
    /** RFC 7231, 6.4.1 */
    MultipleChoices = 300,
    /** RFC 7231, 6.4.2 */
    MovedPermanently = 301,
    /** RFC 7231, 6.4.3 */
    Found = 302,
    /** RFC 7231, 6.4.4 */
    SeeOther = 303,
    /** RFC 7232, 4.1 */
    NotModified = 304,
    /** RFC 7231, 6.4.5 */
    UseProxy = 305,
    /** RFC 7231, 6.4.7 */
    TemporaryRedirect = 307,
    /** RFC 7538, 3 */
    PermanentRedirect = 308,
    /** RFC 7231, 6.5.1 */
    BadRequest = 400,
    /** RFC 7235, 3.1 */
    Unauthorized = 401,
    /** RFC 7231, 6.5.2 */
    PaymentRequired = 402,
    /** RFC 7231, 6.5.3 */
    Forbidden = 403,
    /** RFC 7231, 6.5.4 */
    NotFound = 404,
    /** RFC 7231, 6.5.5 */
    MethodNotAllowed = 405,
    /** RFC 7231, 6.5.6 */
    NotAcceptable = 406,
    /** RFC 7235, 3.2 */
    ProxyAuthRequired = 407,
    /** RFC 7231, 6.5.7 */
    RequestTimeout = 408,
    /** RFC 7231, 6.5.8 */
    Conflict = 409,
    /** RFC 7231, 6.5.9 */
    Gone = 410,
    /** RFC 7231, 6.5.10 */
    LengthRequired = 411,
    /** RFC 7232, 4.2 */
    PreconditionFailed = 412,
    /** RFC 7231, 6.5.11 */
    RequestEntityTooLarge = 413,
    /** RFC 7231, 6.5.12 */
    RequestURITooLong = 414,
    /** RFC 7231, 6.5.13 */
    UnsupportedMediaType = 415,
    /** RFC 7233, 4.4 */
    RequestedRangeNotSatisfiable = 416,
    /** RFC 7231, 6.5.14 */
    ExpectationFailed = 417,
    /** RFC 7168, 2.3.3 */
    Teapot = 418,
    /** RFC 7540, 9.1.2 */
    MisdirectedRequest = 421,
    /** RFC 4918, 11.2 */
    UnprocessableEntity = 422,
    /** RFC 4918, 11.3 */
    Locked = 423,
    /** RFC 4918, 11.4 */
    FailedDependency = 424,
    /** RFC 8470, 5.2 */
    TooEarly = 425,
    /** RFC 7231, 6.5.15 */
    UpgradeRequired = 426,
    /** RFC 6585, 3 */
    PreconditionRequired = 428,
    /** RFC 6585, 4 */
    TooManyRequests = 429,
    /** RFC 6585, 5 */
    RequestHeaderFieldsTooLarge = 431,
    /** RFC 7725, 3 */
    UnavailableForLegalReasons = 451,
    /** RFC 7231, 6.6.1 */
    InternalServerError = 500,
    /** RFC 7231, 6.6.2 */
    NotImplemented = 501,
    /** RFC 7231, 6.6.3 */
    BadGateway = 502,
    /** RFC 7231, 6.6.4 */
    ServiceUnavailable = 503,
    /** RFC 7231, 6.6.5 */
    GatewayTimeout = 504,
    /** RFC 7231, 6.6.6 */
    HTTPVersionNotSupported = 505,
    /** RFC 2295, 8.1 */
    VariantAlsoNegotiates = 506,
    /** RFC 4918, 11.5 */
    InsufficientStorage = 507,
    /** RFC 5842, 7.2 */
    LoopDetected = 508,
    /** RFC 2774, 7 */
    NotExtended = 510,
    /** RFC 6585, 6 */
    NetworkAuthenticationRequired = 511
}
/** A record of all the status codes text. */
export declare const STATUS_TEXT: Readonly<Record<Status, string>>;
/** An HTTP status that is a informational (1XX). */
export type InformationalStatus = Status.Continue | Status.SwitchingProtocols | Status.Processing | Status.EarlyHints;
/** An HTTP status that is a success (2XX). */
export type SuccessfulStatus = Status.OK | Status.Created | Status.Accepted | Status.NonAuthoritativeInfo | Status.NoContent | Status.ResetContent | Status.PartialContent | Status.MultiStatus | Status.AlreadyReported | Status.IMUsed;
/** An HTTP status that is a redirect (3XX). */
export type RedirectStatus = Status.MultipleChoices | Status.MovedPermanently | Status.Found | Status.SeeOther | Status.UseProxy | Status.TemporaryRedirect | Status.PermanentRedirect;
/** An HTTP status that is a client error (4XX). */
export type ClientErrorStatus = Status.BadRequest | Status.Unauthorized | Status.PaymentRequired | Status.Forbidden | Status.NotFound | Status.MethodNotAllowed | Status.NotAcceptable | Status.ProxyAuthRequired | Status.RequestTimeout | Status.Conflict | Status.Gone | Status.LengthRequired | Status.PreconditionFailed | Status.RequestEntityTooLarge | Status.RequestURITooLong | Status.UnsupportedMediaType | Status.RequestedRangeNotSatisfiable | Status.ExpectationFailed | Status.Teapot | Status.MisdirectedRequest | Status.UnprocessableEntity | Status.Locked | Status.FailedDependency | Status.UpgradeRequired | Status.PreconditionRequired | Status.TooManyRequests | Status.RequestHeaderFieldsTooLarge | Status.UnavailableForLegalReasons;
/** An HTTP status that is a server error (5XX). */
export type ServerErrorStatus = Status.InternalServerError | Status.NotImplemented | Status.BadGateway | Status.ServiceUnavailable | Status.GatewayTimeout | Status.HTTPVersionNotSupported | Status.VariantAlsoNegotiates | Status.InsufficientStorage | Status.LoopDetected | Status.NotExtended | Status.NetworkAuthenticationRequired;
/** An HTTP status that is an error (4XX and 5XX). */
export type ErrorStatus = ClientErrorStatus | ServerErrorStatus;
/** A type guard that determines if the status code is informational. */
export declare function isInformationalStatus(status: Status): status is InformationalStatus;
/** A type guard that determines if the status code is successful. */
export declare function isSuccessfulStatus(status: Status): status is SuccessfulStatus;
/** A type guard that determines if the status code is a redirection. */
export declare function isRedirectStatus(status: Status): status is RedirectStatus;
/** A type guard that determines if the status code is a client error. */
export declare function isClientErrorStatus(status: Status): status is ClientErrorStatus;
/** A type guard that determines if the status code is a server error. */
export declare function isServerErrorStatus(status: Status): status is ServerErrorStatus;
/** A type guard that determines if the status code is an error. */
export declare function isErrorStatus(status: Status): status is ErrorStatus;
