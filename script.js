let send = () => {
  let name = document.querySelector(".name").value;
  let message = document.querySelector(".message").value;
  let url = document.querySelector(".url").value;
  let amount = document.querySelector(".amount").value;
  let avatarURL = document.querySelector(".avatar").value;
  let tts = document.querySelector(".tts");
  let ttsValue = tts.options[tts.selectedIndex].value;
  let isTTS;

  if (ttsValue === "true") isTTS = true;
  else isTTS = false;

  console.log(name);
  console.log(message);
  console.log(url);
  console.log(amount);
  console.log(isTTS);

  var request = new XMLHttpRequest();

  var params = {
    username: name,
    avatar_url: avatarURL,
    content: message,
    tts: isTTS,
  };

  for (let i = 1; i <= amount; i++) {
    console.log("IM LOOPING " + i);

    request.open("POST", url, false);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(params));
    setTimeout(500);
  }
};
