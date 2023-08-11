let homeScore = document.getElementById("countHome");
let guestScore = document.getElementById("countGuest");
let leadText = document.getElementById("lead-text");

function add1PointHome() {
  homeScore.textContent = parseInt(homeScore.textContent) + 1;
  updateLeadText();
}

function add2PointsHome() {
  homeScore.innerHTML = parseInt(homeScore.textContent) + 2;
  updateLeadText();
}

function add3PointsHome() {
  homeScore.innerHTML = parseInt(homeScore.textContent) + 3;
  updateLeadText();
}

function add1PointGuest() {
  guestScore.textContent = parseInt(guestScore.textContent) + 1;
  updateLeadText();
}

function add2PointsGuest() {
  guestScore.innerHTML = parseInt(guestScore.textContent) + 2;
  updateLeadText();
}

function add3PointsGuest() {
  guestScore.innerHTML = parseInt(guestScore.textContent) + 3;
  updateLeadText();
}
function reset() {
  homeScore.textContent = "0";
  guestScore.textContent = "0";
  updateLeadText();
}

function updateLeadText() {
  const homeScoreValue = parseInt(homeScore.textContent);
  const guestScoreValue = parseInt(guestScore.textContent);

  if (homeScoreValue === 0 && guestScoreValue === 0) {
    leadText.textContent = "";
  } else if (homeScoreValue === guestScoreValue) {
    leadText.textContent = "Tied";
  } else if (homeScoreValue > guestScoreValue) {
    leadText.textContent = "Home Team is Leading";
  } else {
    leadText.textContent = "Guest Team is Leading";
  }
}
