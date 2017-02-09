var run = function() {
  var A = document.getElementById("A").value;
  var B = document.getElementById("B").value;
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var solution = document.getElementById("solution");
  // preparing for invalid entries
      var angleCharCount = 1;
      var sideCharCount = 1;
      if (A.length > 0 && B.length > 0) {
        angleCharCount = 2
      }
      if (A.length < 1 && B.length < 1) {
        angleCharCount = 0
      }
      if (a.length > 0 && b.length > 0) {
        sideCharCount = 2
      }
      if (b.length > 0 && c.length > 0) {
        sideCharCount = 2
      }
      if (a.length > 0 && c.length > 0) {
        sideCharCount = 2
      }
      if (a.length < 1 && b.length < 1 && c.length < 1) {
        sideCharCount = 0
      }
      if (angleCharCount != 1 || sideCharCount != 1) {
        solution.innerHTML = "Provide one angle and one side";
      } else {
        if (A > 89 || B > 89) {
          solution.innerHTML = "Angle cannot be or exceed 90"
        } else {
      // A and a
      if (A.length > 0 && B.length < 1 && a.length > 0 && b.length < 1 && c.length < 1) {
        var mB1 = (90 - A)
        solution.innerHTML =
          "A = " + A + "&nbsp&nbsp <br> <br>" +
          "B = " + mB1 + "&nbsp&nbsp <br> <br>" +
          "the length of 'a' = &nbsp&nbsp" + a + "<br> <br>" +
          "the length of 'b' = &nbsp&nbsp" + ((a / Math.tan(Math.PI * (A / 180)))).toFixed(2) + "<br> <br>" +
          "the length of 'c' = &nbsp&nbsp" + ((a / Math.sin(Math.PI * (A / 180)))).toFixed(2) + "<br> <br>";
        // A and b
      } else if (A.length > 0 && B.length < 1 && a.length < 1 && b.length > 0 && c.length < 1) {
        var mB1 = (90 - A)
        solution.innerHTML =
          "A = " + A + "&nbsp&nbsp <br> <br>" +
          "B = " + mB1 + "&nbsp&nbsp <br> <br>" +
          "the length of 'a' = &nbsp&nbsp" + ((Math.tan(Math.PI * (A / 180)) * b)).toFixed(2) + "<br> <br>" +
          "the length of 'b' = &nbsp&nbsp" + b + "<br> <br>" +
          "the length of 'c' = &nbsp&nbsp" + (b / Math.cos(Math.PI * (A / 180))).toFixed(2);
        // A and c
      } else if (A.length > 0 && B.length < 1 && a.length < 1 && b.length< 1 && c.length > 0) {
        var mB1 = (90 - A)
      solution.innerHTML =
        "A = " + A + "&nbsp&nbsp <br> <br>" +
        "B = " + mB1 + "&nbsp&nbsp <br> <br>" +
        "the length of 'a' = &nbsp&nbsp" + ((Math.sin(Math.PI * (A / 180)) * c)).toFixed(2) + "<br> <br>" +
        "the length of 'b' = &nbsp&nbsp" + ((Math.cos(Math.PI * (A / 180)) * c)).toFixed(2) + "<br> <br>" +
        "the length of 'c' = &nbsp&nbsp" + c;
        // B and a
      } else if (A.length < 1 && B.length > 0 && a.length > 0 && b.length < 1 && c.length < 1) {
        var mA1 = (90 - B)
        solution.innerHTML =
        "A = " + mA1 + "&nbsp&nbsp <br> <br>" +
        "B = " + B + "&nbsp&nbsp <br> <br>" +
        "the length of 'a' = &nbsp&nbsp" + a + "<br> <br>" +
        "the length of 'b' = &nbsp&nbsp" + ((Math.tan(Math.PI * (B / 180)) * a)).toFixed(2) + "<br> <br>" +
        "the length of 'c' = &nbsp&nbsp" + ((a / Math.cos(Math.PI * (B / 180)))).toFixed(2);
        // B and b
      } else if (A.length < 1 && B.length > 0 && a.length < 1 && b.length > 0 && c.length < 1) {
        var mA1 = (90 - B)
        solution.innerHTML =
        "A = " + mA1 + "&nbsp&nbsp <br> <br>" +
        "B = " + B + "&nbsp&nbsp <br> <br>" +
        "the length of 'a' = &nbsp&nbsp" + ((b / Math.tan(Math.PI * (B / 180)))).toFixed(2) + "<br> <br>" +
        "the length of 'b' = &nbsp&nbsp" + b + "<br> <br>" +
        "the length of 'c' = &nbsp&nbsp" + ((b / Math.sin(Math.PI * (B / 180)))).toFixed(2);
        // B and c
      } else if (A.length < 1 && B.length > 0 && a.length < 1 && b.length < 1 && c.length > 0) {
        var mA1 = (90 - B)
        solution.innerHTML =
        "A = " + mA1 + "&nbsp&nbsp <br> <br>" +
        "B = " + B + "&nbsp&nbsp <br> <br>" +
        "the length of 'a' = &nbsp&nbsp" + ((Math.cos(Math.PI * (B / 180)) * c)).toFixed(2) + "<br> <br>" +
        "the length of 'b' = &nbsp&nbsp" + ((Math.sin(Math.PI * (B / 180)) * c)).toFixed(2) + "<br> <br>" +
        "the length of 'c' = &nbsp&nbsp" + c;
      }
    }
  }
}
