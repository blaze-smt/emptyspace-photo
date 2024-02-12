document.addEventListener("DOMContentLoaded", function () {
  const seasonColors = {
    winter: "#ffffff", // Winter: White
    spring: "#01FF72", // Spring: Green
    summer: "#6495EC", // Summer: Blue
    fall: "#F5A92B", // Fall: Orange
  };

  function getSeason() {
    const now = new Date();
    const year = now.getFullYear();
    // Define the start dates of each season
    const springStart = new Date(year, 2, 20); // March 20
    const summerStart = new Date(year, 5, 21); // June 21
    const fallStart = new Date(year, 8, 22); // September 22
    const winterStart = new Date(year, 11, 21); // December 21

    // Determine the current season based on the current date
    if (now >= springStart && now < summerStart) {
      return "spring";
    } else if (now >= summerStart && now < fallStart) {
      return "summer";
    } else if (now >= fallStart && now < winterStart) {
      return "fall";
    } else {
      return "winter";
    }
  }

  function updateBackground() {
    const currentSeason = getSeason();
    const color = seasonColors[currentSeason];
    // Adjust the gradient's end color slightly darker or lighter here if needed
    const gradientEndColor = "rgba(255, 255, 255, 0.1)"; // Placeholder for adjustments

    // Set the radial gradient as the background
    document.querySelector(
      ".season-color"
    ).style.background = `radial-gradient(${color}, ${gradientEndColor})`;

    document.querySelector(".season-color").innerText = color;
  }

  updateBackground(); // Call the function to set the initial background
});
