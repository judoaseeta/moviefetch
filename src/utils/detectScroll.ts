export type DetectScrollArgs = {
    startValue: number | 5;
    sensibility: number | 200;
    isUpSetter: (value: boolean) => void;
    isDownSetter: (value: boolean) => void;
};
const detectScroll = (args: DetectScrollArgs) => {
    const { 
        startValue, 
        sensibility, 
        isDownSetter, 
        isUpSetter
    } =  args;
    let lastScrollYValue = 0;
    let isScroll = false;
    const setScroll = () => isScroll = true;
    window.addEventListener('scroll', setScroll);
    const scrollDetector = () => {
        if (isScroll) {
            hasScrolled();
            isScroll = false;
        }
    };
    const hasScrolled = () => {
        let st = window.scrollY;
        if (Math.abs(lastScrollYValue - st) <= startValue) {
            return;
        }
        if (st > lastScrollYValue) {
            isDownSetter(true);
            isUpSetter(false);
        } else {
            if (st < lastScrollYValue) {
                isUpSetter(true);
                isDownSetter(false);
            }
        }
        lastScrollYValue = st;
    };
    let startDetect = setInterval(scrollDetector, sensibility);
    return function () {
        clearInterval(startDetect);
        window.removeEventListener('scroll', setScroll);
    };
};
export default detectScroll;