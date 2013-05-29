define([ "seed/controller" ], function(controller) {

	describe("seed.controller", function() {
		it("should update node after calling update", function() {
			controller.node = {
				innerHTML : ""
			};
			controller.update({
				target : {
					value : 'test'
				}
			});
			expect(controller.node.innerHTML).toBe("test");
		});

	});

});