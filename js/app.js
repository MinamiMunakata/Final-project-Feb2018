
// Minami Munakata
// Feb 15, 2018


$(function() {
$('.pie_chart').easyPieChart({
//ここに各設定パラメータを記述
	easing:'easeOutQuart',
	barColor:'rgba(255,109,97,1.0)',
	trackColor:'rgba(255,218,201,1.0)',
	lineCap:'square',
	lineWidth: 20,
	trackWidth: 16,
	scaleLength:10,
	scaleColor:false,
	animate:{ duration: 10000, enabled: true },
	rotate:30,
	onStep: function(from, to, percent) {
	$(this.el).find('.pie_percent').text(Math.round(percent));
	}
});
});
