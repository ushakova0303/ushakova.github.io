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
function changeTheme(){
	if(isDark){
		document.body.style.setProperty('--back-color', '255, 255, 255');
		document.body.style.setProperty('--addit-color', '4, 4, 174');
		document.body.style.setProperty('--other-color', '0, 0, 0');
		isDark = false
	} else {
		document.body.style.setProperty('--back-color', '0, 0, 0');
		document.body.style.setProperty('--addit-color', '174, 4, 4');
		document.body.style.setProperty('--other-color', '217, 217, 217');
		isDark = true
	}
}