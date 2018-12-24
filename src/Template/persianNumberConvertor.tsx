interface IPersian {
	[key: string]: string;
}
export const persianNumberConvertor = (numbers: string): string => {
	let arr: [string] = [''];
	const persian: IPersian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
	numbers.split('').map(
		(number: string, index: number): void => {
			arr[index] = persian[number];
		}
	);
	return arr.join('');
};
