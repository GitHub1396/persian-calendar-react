interface ISeasons {
	name: string;
	imageSource: any;
}

export const seasons: { [key: string]: ISeasons } = {
	spring: { name: 'بهار', imageSource: require('../_temp_image/spring.jpg') },
};
