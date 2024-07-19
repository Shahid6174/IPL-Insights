document.addEventListener("DOMContentLoaded", function () {
  // DLS Calculator Input Handling
  var dlsInputs = document.querySelectorAll(
    "#teamAScore, #teamAWickets, #teamAExtraOvers, #teamBWickets"
  );
  dlsInputs.forEach(function (input) {
    input.addEventListener("input", calculateDLS);
  });

  // Function to Calculate Duckworth Lewis Stern (DLS) Target
  function calculateDLS() {
    var teamAScore = parseInt(document.getElementById("teamAScore").value) || 0;
    var teamAWickets =
      parseInt(document.getElementById("teamAWickets").value) || 0;
    var teamAExtraOvers =
      parseFloat(document.getElementById("teamAExtraOvers").value) || 0;
    var teamBWickets =
      parseInt(document.getElementById("teamBWickets").value) || 0;

    if (teamAWickets <= teamBWickets) {
      var target = Math.floor((teamAScore * (20 - teamAExtraOvers)) / 20) + 1;
      document.getElementById("dlsResult").value = target;
    } else {
      var adjustedTarget =
        Math.floor((teamAScore * (20 - teamAExtraOvers)) / 20) + 4;
      var wicketsDifference = teamAWickets - teamBWickets;
      var additionalRuns = Math.floor(wicketsDifference / 2) + 4;
      var finalTarget = adjustedTarget + additionalRuns;
      document.getElementById("dlsResult").value = finalTarget;
    }
  }

  // Call calculateDLS function on button click
  document
    .getElementById("dlsCalculateBtn")
    .addEventListener("click", calculateDLS);
});

document.querySelector(".a1").addEventListener("mouseover", function () {
  document.querySelector(".one").style.visibility = "visible";
});

document.querySelector(".a1").addEventListener("mouseout", function () {
  document.querySelector(".one").style.visibility = "hidden";
});

document.querySelector(".b").addEventListener("mouseover", function () {
  document.querySelector(".two").style.visibility = "visible";
});

document.querySelector(".b").addEventListener("mouseout", function () {
  document.querySelector(".two").style.visibility = "hidden";
});

document.querySelector(".c").addEventListener("mouseover", function () {
  document.querySelector(".three").style.visibility = "visible";
});

document.querySelector(".c").addEventListener("mouseout", function () {
  document.querySelector(".three").style.visibility = "hidden";
});

document.querySelector(".d").addEventListener("mouseover", function () {
  document.querySelector(".four").style.visibility = "visible";
});

document.querySelector(".d").addEventListener("mouseout", function () {
  document.querySelector(".four").style.visibility = "hidden";
});
