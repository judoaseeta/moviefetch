import * as React from 'react';

const Selector: React.SFC<{
    defaultValue?: string;
    values: string[]
    onChangeFunction: (val: string) => void | Action;
}> = (props) => (
    <select
        value={props.defaultValue}
        onChange={(e) => props.onChangeFunction(e.target.value)}
    >
        {props.values.map(value => <option key={value}>{value}</option>)}
    </select>
);
export default Selector;