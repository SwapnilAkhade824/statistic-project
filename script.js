document.addEventListener("DOMContentLoaded", function () {
  // function for the Data Type functionality
  const categorialDataButton = document.getElementById(
    "categorial-data-button"
  );
  const numericalDataButton = document.getElementById("numerical-data-button");
  const categorialDataButtons = document.getElementById(
    "categorial-data-buttons"
  );
  const numericalDataButtons = document.getElementById(
    "numerical-data-buttons"
  );

  const dataSubType = document.getElementById("data-subtype");

  categorialDataButton.addEventListener("click", function () {
    if (!categorialDataButtons.classList.contains("hidden")) {
      dataSubType.classList.add("hidden");
    } else {
      dataSubType.classList.remove("hidden");
    }
    if (!numericalDataButtons.classList.contains("hidden")) {
      numericalDataButtons.classList.add("hidden");
    }
    categorialDataButtons.classList.toggle("hidden");
  });

  numericalDataButton.addEventListener("click", function () {
    if (!numericalDataButtons.classList.contains("hidden")) {
      dataSubType.classList.add("hidden");
    } else {
      dataSubType.classList.remove("hidden");
    }
    if (!categorialDataButtons.classList.contains("hidden")) {
      categorialDataButtons.classList.add("hidden");
    }
    numericalDataButtons.classList.toggle("hidden");
  });

  // function for the subData Type functionality
  const nominalDataButton = document.getElementById("nominal-data-button");
  const ordinalDataButton = document.getElementById("ordinal-data-button");
  const discreteDataButton = document.getElementById("discrete-data-button");
  const continuousDataButton = document.getElementById(
    "continuous-data-button"
  );

  const calculationOptions = document.getElementById("calculation-options");

  const nominalDataOptions = document.getElementById("nominal-data-options");
  const ordinalDataOptions = document.getElementById("ordinal-data-options");
  const numericalDataOptions = document.getElementById(
    "numerical-data-options"
  );

  nominalDataButton.addEventListener("click", function () {
    if (!nominalDataOptions.classList.contains("hidden")) {
      calculationOptions.classList.add("hidden");
    } else {
      calculationOptions.classList.remove("hidden");
    }
    if (!ordinalDataOptions.classList.contains("hidden")) {
      ordinalDataOptions.classList.add("hidden");
    }
    if (!numericalDataOptions.classList.contains("hidden")) {
      numericalDataOptions.classList.add("hidden");
    }
    nominalDataOptions.classList.toggle("hidden");
  });

  ordinalDataButton.addEventListener("click", function () {
    if (!ordinalDataOptions.classList.contains("hidden")) {
      calculationOptions.classList.add("hidden");
    } else {
      calculationOptions.classList.remove("hidden");
    }
    if (!nominalDataOptions.classList.contains("hidden")) {
      nominalDataOptions.classList.add("hidden");
    }
    if (!numericalDataOptions.classList.contains("hidden")) {
      numericalDataOptions.classList.add("hidden");
    }
    ordinalDataOptions.classList.toggle("hidden");
  });

  function numericalDataOptionsToggle() {
    if (!numericalDataOptions.classList.contains("hidden")) {
      calculationOptions.classList.add("hidden");
    } else {
      calculationOptions.classList.remove("hidden");
    }
    if (!nominalDataOptions.classList.contains("hidden")) {
      nominalDataOptions.classList.add("hidden");
    }
    if (!ordinalDataOptions.classList.contains("hidden")) {
      ordinalDataOptions.classList.add("hidden");
    }
    numericalDataOptions.classList.toggle("hidden");
  }

  discreteDataButton.addEventListener("click", numericalDataOptionsToggle);
  continuousDataButton.addEventListener("click", numericalDataOptionsToggle);
});
