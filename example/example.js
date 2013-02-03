function exampleTest() {
  describe("Maths", {
    setup: function(test) {
      return test();
    },
  
    "can do addition": function() {
      return (5 + 4) == 9;
    },
  
    "is from 1984": function() {
      return (2 + 2) == 5;
    }
  });  
}