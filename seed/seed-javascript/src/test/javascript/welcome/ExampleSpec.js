define("welcome/Example", function(Example) {
	describe("example.hello", function() {
		it("should return 'hello jim'", function() {
			expect(Example.hello("jim")).toBe("hello jim");
		});
	});
});
