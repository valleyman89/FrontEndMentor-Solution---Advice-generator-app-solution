async function grabAdvice() {
  const adviceURL = "https://api.adviceslip.com/advice";
  const req = new Request(adviceURL);
  const res = await fetch(req);
  const adviceDetails = await res.text();
  var adviceObject = JSON.parse(adviceDetails);

  document.getElementById("adviceId").innerText = adviceObject["slip"]["id"];
  document.getElementsByTagName("p")[0].innerText =
    adviceObject["slip"]["advice"];
}

grabAdvice();
