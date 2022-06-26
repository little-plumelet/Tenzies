const getRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const getInitialValues = () => {
    const initialNumbers = [];
    for (let i = 0; i < 10; i++) {
        initialNumbers.push(getRandomNum(1, 6));
    }
    return initialNumbers;
}