$(document).ready(function(){
	$('.team-slider').slick({
		dots: true,
		slidesToShow: 3,
		speed: 350,
		responsive:[
			// {
			// 	breakpoint:
			// 	settings: {}
			// }
		]
	});
});
let isDark = true
const back_color_dark = '0, 0, 0',
		addit_color_dark = '174, 4, 4',
		other_color_dark = '217, 217, 217',
		back_color_light = '200, 200, 200',
		addit_color_light = '50, 50, 174',
		other_color_light = '27, 27, 27';
function changeTheme(){
	if(isDark){
		document.body.style.setProperty('--back-color', back_color_light);
		document.body.style.setProperty('--addit-color', addit_color_light);
		document.body.style.setProperty('--other-color', other_color_light);
		isDark = false
		localStorage.setItem('back_color', back_color_light);
		localStorage.setItem('addit_color', addit_color_light);
		localStorage.setItem('other_color', other_color_light);

	} else {
		document.body.style.setProperty('--back-color', back_color_dark);
		document.body.style.setProperty('--addit-color', addit_color_dark);
		document.body.style.setProperty('--other-color', other_color_dark);
		isDark = true
		localStorage.setItem('back_color',back_color_dark);
		localStorage.setItem('addit_color', addit_color_dark);
		localStorage.setItem('other_color', other_color_dark);
	}
}