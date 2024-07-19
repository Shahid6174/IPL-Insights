document.addEventListener("DOMContentLoaded", function () {
  // NRR Calculator Input Handling
  var nrrInputs = document.querySelectorAll("#Runs, #balls");
  nrrInputs.forEach(function (input) {
    input.addEventListener("input", calculateNRR);
  });

  // Function to Calculate Net Run Rate (NRR)
  function calculateNRR() {
    var b1r = parseFloat(document.getElementById("Runs").value) || 0;
    var b1o = parseFloat(document.getElementById("balls").value) || 0;

    if (b1r !== 0 && b1o !== 0) {
      var frr = b1r / b1o;
      var calc = (frr * 100).toFixed(2);
      document.getElementById("res").value = calc;
    } else {
      document.getElementById("res").value = "";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // NRR Calculator Input Handling
  var nrrInputs = document.querySelectorAll("#Runs1, #wic");
  nrrInputs.forEach(function (input) {
    input.addEventListener("input", calculateNRR);
  });

  // Function to Calculate Net Run Rate (NRR)
  function calculateNRR() {
    var b1r = parseFloat(document.getElementById("Runs1").value) || 0;
    var b1o = parseFloat(document.getElementById("wic").value) || 0;

    if (b1r !== 0 && b1o !== 0) {
      var frr = b1r / b1o;
      var calc = frr.toFixed(2);
      document.getElementById("res1").value = calc;
    } else {
      document.getElementById("res1").value = "";
    }
  }
});
