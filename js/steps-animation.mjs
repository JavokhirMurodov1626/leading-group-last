const progressBar = document.querySelector(".steps-progress .wrapper");
const steps = progressBar?.querySelectorAll(".progress-step");

let currentStep = 0;
let isProgressStarted = false; // Add flag to keep track of progress

function updateProgress() {
  if (currentStep >= steps.length) {
    return; // Stop if all steps have been completed
  }

  if (!isProgressStarted) {
    isProgressStarted = true; // Set flag to true if progress hasn't started
  } else {
    setTimeout(() => {
      steps[currentStep - 1].classList.remove("scale");
    }, 5000);
  }

  steps[currentStep].classList.add("active");
  steps[currentStep].classList.add("scale");
  currentStep++;

  if (currentStep < steps.length) {
    setTimeout(updateProgress, 5000);
  }
}


updateProgress();