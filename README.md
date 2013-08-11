# leica

![](http://f.cl.ly/items/211f3o3p2W0H0v3J2n0Z/tumblr_lcib99n9qG1qdbf5lo1_1280.jpg)

Focused and pure Javascript testing.

## Usage

```javascript
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

leica.tests(function() {
  exampleTest();
});
```
