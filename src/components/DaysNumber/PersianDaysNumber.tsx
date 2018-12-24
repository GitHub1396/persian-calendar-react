import * as React from 'react';
interface IPersianDaysNumber {
	dayNumber: number;
}
const PersianDaysNumber: React.SFC<IPersianDaysNumber> = ({ dayNumber }) => {
	return (
		<div>
			<h1>{dayNumber}</h1>
		</div>
	);
};

export default PersianDaysNumber;
