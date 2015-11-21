
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Car = Backbone.Model.extend({
  validate: function(attrs) {
    if (!attrs.make) {
      return "the car's make is required";
    }
  }
});

var car = new Car();