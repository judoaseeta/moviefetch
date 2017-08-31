import * as React from 'react';
export type Props = {
    message: string,
    tolga: string,
    jotka: string
};
const Test: React.SFC<Props> = ({message, jotka, tolga}) => (
    <div>{message}: {tolga}: {jotka}</div>
);
export default Test;