let Snack = (function (window) {
	function Snack() {
		this.init ();
	}
	//初始化
	Snack.prototype.init=function () {
		this.create();
	};
	//随机选点
	Snack.prototype.random = function () {
		this.x = Math.floor(Math.random() * 400 + 1);
		this.y = Math.floor(Math.random() * 400 + 1);
	};
	//创造游戏条件
	Snack.prototype.create = function () {
		this.random();
		//创建画布
		let drawCloth = document.getElementById('cvs').getContext('2d');
		//创建蛇头
		drawCloth.fillStyle = 'red';
		drawCloth.fillRect(this.x, this.y, 10, 10);
	};
	return Snack;
})(window);