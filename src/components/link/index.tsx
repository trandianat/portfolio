import { PropsWithChildren } from 'react';

export const Link = ({
  children,
  url,
  ...rest
}: PropsWithChildren<{
  url: string;
  [rest: string]: unknown;
}>): JSX.Element => (
  <a href={url} target="_blank" {...rest}>
    {children}
  </a>
);
