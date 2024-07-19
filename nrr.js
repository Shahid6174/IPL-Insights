document.addEventListener("DOMContentLoaded", function () {
  // NRR Calculator Input Handling
  var nrrInputs = document.querySelectorAll(
    "#fInngRuns, #sInngRuns, #fInngOvers, #sInngOvers"
  );
  nrrInputs.forEach(function (input) {
    input.addEventListener("input", calculateNRR);
  });

  // Function to Calculate Net Run Rate (NRR)
  function calculateNRR() {
    var b1r = parseFloat(document.getElementById("fInngRuns").value) || 0;
    var b1o = parseFloat(document.getElementById("fInngOvers").value) || 0;
    var b2r = parseFloat(document.getElementById("sInngRuns").value) || 0;
    var b2o = parseFloat(document.getElementById("sInngOvers").value) || 0;

    if (b1o !== 0 && b2o !== 0) {
      var frr = b1r / b1o;
      var srr = b2r / b2o;
      var calc = (frr - srr).toFixed(2);
      document.getElementById("nrrTBF").value = calc;
    } else {
      document.getElementById("nrrTBF").value = "";
    }
  }
});
