window.addEventListener('load', function () {
  // Gradually show the button after a few seconds
  setTimeout(function () {
    var enterBtn = document.getElementById('enterBtn');
    enterBtn.style.opacity = 1;
  }, 3000); // Adjust the delay (in milliseconds) as needed

  // Handle button click event
  document.getElementById('enterBtn').addEventListener('click', function () {
    // Rotate the first image halfway and fade it out
    var loader = document.getElementById('loader');
    loader.style.transform = 'rotateY(90deg)';
    loader.style.opacity = 0;

    // Fade out the button
    var enterBtn = document.getElementById('enterBtn');
    enterBtn.style.opacity = 0;

    // Set the second image to rotate in the opposite direction and fade it in
    var content = document.getElementById('content');
    content.style.transform = 'rotateY(0deg)';
    content.style.opacity = 1;

    // Fade out entire body before redirecting to the next HTML page
    document.body.classList.add('fadeout');
    setTimeout(function () {
      window.location.href = 'about.html';
    }, 3000); // Adjust the delay (in milliseconds) as needed
  });
});
