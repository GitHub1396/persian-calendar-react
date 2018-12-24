import * as React from 'react';
interface ISeasonalImage {
	dayNumber: number;
}
const SeasonalImage: React.SFC<ISeasonalImage> = ({ dayNumber }) => {
	return (
		<div>
			<h1>{dayNumber}</h1>
		</div>
	);
};

export default SeasonalImage;
