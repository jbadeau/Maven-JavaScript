define(["when"], function(when) {
	return {
		update : function(e) {
			this.node.innerHTML = e.target.value;
		}
	};
});