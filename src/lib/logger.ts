/* eslint-disable no-console */

/**
 * Simple logger that only works in development mode
 */
export default function logger(object: unknown, comment?: string): void {
  if (process.env.NODE_ENV !== 'development') return;

  console.log(
    '%c============== INFO LOG',
    'color: #22D3EE',
    `\n${typeof window !== 'undefined' ? window.location.pathname : ''}`,
    `\n=== ${comment ?? ''}\n`,
    object,
  );
}
