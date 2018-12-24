import * as React from 'react';
import styles from './PersianDaysName.module.css';
interface IPersianDaysName {
	persianDays: { [key: string]: string };
}
const PersianDaysName: React.SFC<IPersianDaysName> = ({ persianDays }) => {
	const getPersianDaysName = Object.values(persianDays).map(persianDay => {
		return (
			<li className={styles.persian_Day} key={persianDay}>
				{persianDay}
			</li>
		);
	});
	return (
		<div>
			<ul className={styles.persian_Days}>{getPersianDaysName}</ul>
		</div>
	);
};

export default PersianDaysName;
