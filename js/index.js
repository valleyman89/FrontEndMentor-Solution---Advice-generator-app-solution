async function grabAdvice() {
  // set URL and get the JSON result
  const adviceURL = "https://api.adviceslip.com/advice";
  const req = new Request(adviceURL);
  const res = await fetch(req);
  const adviceDetails = await res.text();

  // turn it into an object
  let adviceObject = JSON.parse(adviceDetails);

  // manipulate the DOM and populate with the object result
  document.getElementById("adviceId").innerText = adviceObject["slip"]["id"];
  document.getElementsByTagName("p")[0].innerText =
    adviceObject["slip"]["advice"];
}

// call the function
grabAdvice();
