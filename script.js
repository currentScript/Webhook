const send = () => {
  const name = document.querySelector(".name").value;
  const message = document.querySelector(".message").value;
  const url = document.querySelector(".url").value;
  const amount = document.querySelector(".amount").value;
  const avatarURL = document.querySelector(".avatar").value;
  const tts = document.querySelector(".tts");
  const ttsValue = tts.options[tts.selectedIndex].value;
  let isTTS;

  if (ttsValue === "true") isTTS = true;
  else isTTS = false;

  const request = new XMLHttpRequest();

  const params = {
    username: name,
    avatar_url: avatarURL,
    content: message,
    tts: isTTS,
  };

  for (let i = 1; i <= amount; i++) {
    console.log(i);

    request.open("POST", url, false);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(params));
    setTimeout(500);
  }
};
