var data = {a: 1};

var app = new Vue({
	el: "#app",
	data: data,
	created: function() {
		alert(this.a);
	}
});