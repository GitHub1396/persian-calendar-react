import * as React from 'react';
import { persianDays } from '../../constants/persianDays';
import PersianDaysName from '../../components/DaysName/PersianDaysName';
class PersianCalendar extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				<PersianDaysName persianDays={persianDays} />
			</div>
		);
	}
}

export default PersianCalendar;
