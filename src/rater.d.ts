declare interface OnRateArgs extends React.MouseEvent<any> {
    rating: number
}
declare module 'react-rater' {
    export default class Rater extends React.Component<{
        total?: number;
        rating?: number;
        interactive?: boolean;
        onRate?: (args: OnRateArgs) => void;
    }, {}>{

    }
}