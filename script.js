var typed = new Typed('.text', {
  strings: ['Software Developer', 'Fronted Developer', 'Backend Developer', 'Full Stack Developer'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

const add = document.getElementById('add');
// document.getElementById('intro').addEventListener('click', () => {
//   add.innerHTML = `
//   <h4>Aspiring Sotfware  Developer</h4>
//   <p>
//     I am a skilled software developer, specializing in web design and MERN full-stack development.
//     With a strong proficiency in front-end design and back-end development, I create visually appealing,
//     user-friendly web applications. I am dedicated to staying updated with industry trends,
//     ensuring high-quality digital solutions.
//   </p>
// `;

// })

function addContent() {
  handleButtonClick('intro');
}

// Function to trigger a click event on the button when the page loads
function autoClickButton() {
  const button = document.getElementById('intro');
  if (button) {
    button.click(); // Simulate a click event
  }
}

// Attach the addContent function to the button's click event
const button = document.getElementById('intro');
button.addEventListener('click', addContent);

// Attach the autoClickButton function to the window's load event
window.addEventListener('load', autoClickButton);

document.getElementById('edu').addEventListener('click', () => {
  handleButtonClick('edu');
})
document.getElementById('resume').addEventListener('click', () => {
  handleButtonClick('resume');
})

function handleButtonClick(buttonId) {
  // Get all buttons with the class "about-btn"
  const buttons = document.querySelectorAll('.about-btn');

  // Remove the "active-btn" class from all buttons
  buttons.forEach(button => {
    button.classList.remove('active-btn');
  });

  // Add the "active-btn" class to the clicked button
  const clickedButton = document.getElementById(buttonId);
  clickedButton.classList.add('active-btn');
}

// function for

function slideTo(index) {
  const contentContainer = document.querySelector('.content-container');
  const contentWidth = document.querySelector('.content').offsetWidth;
  contentContainer.style.transform = `translateX(-${index * contentWidth}px)`;
}


const textElement = document.getElementById('abt-demo');

function animate() {
  var text = textElement.innerHTML;
  text = text.replace(" ", "_")
  var len = text.length
  var wrapped = "";
  for (var i in text) {
    wrapped += '<span>' + text.charAt(i) + '</span>';
  }
  textElement.innerHTML = wrapped
  var delay = 0
  for (var i = 0; i < len; i++) {
    var childQuery = "#abt-demo span:nth-child(" + (i + 1) + ")"
    document.querySelector(childQuery).style.animationDelay = delay + "s";
    delay += 0.25
  }

  document.querySelectorAll('#abt-demo span').forEach(span => span.classList.add('animated'))
}


animate()


//sendnig mail para
function sendMail(e) {
  e.preventDefault();
  let param = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  }

  emailjs.send("service_85b8mah", "template_ezp2itl", param).then(alert("Msg sent"));
}

// for skills section
// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to update the CSS class based on visibility
function updateProgressBarsInView() {
  const progressBars = document.querySelectorAll('.section-skills .Teachnical-bars .bar .progress-line');
  const progresscirlcle = document.querySelectorAll('.skills-container .radial-bars.radial-bar .progress-bar');

  progressBars.forEach((progressBar) => {
    if (isElementInViewport(progressBar)) {
      progressBar.classList.add('new-css');
    }
  });
}

// Initial check when the page loads
updateProgressBarsInView();

// Check if the progress bars are in view when the window is scrolled or resized
window.addEventListener('scroll', updateProgressBarsInView);
window.addEventListener('resize', updateProgressBarsInView);


// for navbar

let navbar = document.getElementById("navbar");

setInterval(() => {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // If the screen width is greater than 440px, always set display to "block"
  if (screenWidth > 440) {
    navbar.style.display = "block";
  }
}, 100);

document.getElementById("mobile-menu").addEventListener("click", function () {
  navbar.style.display = (navbar.style.display === "block") ? "none" : "block";
});

