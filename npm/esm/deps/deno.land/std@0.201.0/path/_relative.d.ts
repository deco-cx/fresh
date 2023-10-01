/**
 * Return the relative path from `from` to `to` based on current working directory.
 *
 * @param from path in current working directory
 * @param to path in current working directory
 */
export declare function posixRelative(from: string, to: string): string;
/**
 * Return the relative path from `from` to `to` based on current working directory.
 *
 * An example in windws, for instance:
 *  from = 'C:\\orandea\\test\\aaa'
 *  to = 'C:\\orandea\\impl\\bbb'
 * The output of the function should be: '..\\..\\impl\\bbb'
 *
 * @param from path in current working directory
 * @param to path in current working directory
 */
export declare function windowsRelative(from: string, to: string): string;
