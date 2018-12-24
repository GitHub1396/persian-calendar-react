import * as React from 'react';
import './template.css';
import { persianNumberConvertor } from './persianNumberConvertor';
class Template extends React.Component {
	render() {
		return (
			<div className="persian_calendar_container">
				<div className="persian_calendar_seasonal_date_selection_container">
					<div className="persian_calendar_date_selection">
						<div className="persian_calendar_dropdown">
							<ul id="my-dropdown2">
								<li>
									<a href="#">Coffee</a>
								</li>
								<li>
									<a href="#">Coverage</a>
								</li>
								<li>
									<a href="https://twitter.com/hashtag/covfefe">Covfefe</a>
								</li>
							</ul>
							<a
								href="#my-dropdown2"
								aria-controls="my-dropdown2"
								role="button"
								data-toggle="persian_calendar_dropdown"
								id="my-dropdown2-btn"
							>
								Choose one
							</a>
							<a
								href="#my-dropdown2-btn"
								aria-controls="my-dropdown2"
								role="button"
								data-toggle="persian_calendar_dropdown"
								className="close"
							>
								Close dropdown
							</a>
						</div>
					</div>
					<div className="persian_calendar_date_selection">سال</div>
					<div className="persian_calendar_date_selection">سال</div>
				</div>
				<div className="persian_calendar_date_container">
					<div className="persian_calendar_date_right_side">
						<div className="persian_calendar_day_names_container">
							<span className="persian_calendar_day_name">شنبه</span>
							<span className="persian_calendar_day_name">یکشنبه</span>
							<span className="persian_calendar_day_name">دوشنبه</span>
							<span className="persian_calendar_day_name">سه شنبه</span>
							<span className="persian_calendar_day_name">چهارشنبه</span>
							<span className="persian_calendar_day_name">پنج شنبه</span>
							<span className="persian_calendar_day_name">جمعه</span>
						</div>
						<div className="persian_calendar_date_days">
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('01')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('02')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('03')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('04')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('05')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('06')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('07')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('08')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('09')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('10')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('11')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('12')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('13')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('14')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('15')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('16')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('17')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('18')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('19')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('20')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('21')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('22')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('23')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('24')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('25')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('26')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('27')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('28')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('29')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('30')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('31')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('01')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('02')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('03')}</span>
							</span>
							<span className="persian_calendar_day_number_container">
								<span className="persian_calendar_day_number">{persianNumberConvertor('04')}</span>
							</span>
						</div>
					</div>
					{/* <div className="persian_calendar_date_left_side">
						<div className="persian_calendar_date_now">
							<span className="persian_calendar_day">08</span>
							<span className="persian_calendar_month">اردیبهشت</span>
							<span className="persian_calendar_year">1396</span>
						</div>
					</div> */}
				</div>
			</div>
		);
	}
}

export default Template;
