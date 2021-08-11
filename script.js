const send = () => {
  const name = document.querySelector(".name").value;
  const message = document.querySelector(".message").value;
  const url = document.querySelector(".url").value;
  const avatarURL = document.querySelectorAll(".avatar").value;
  const tts = document.querySelector(".tts");
  const ttsValue = tts.options[tts.selectedIndex].value;

  let isTTS;
  if (ttsValue === "true") isTTS = true;
  else isTTS = false;

  const client = new XMLHttpRequest();

  const params = {
    username: name,
    avatar_url: avatarURL,
    content: message,
    tts: isTTS,
  };

  client.open("POST", url, false);
  client.setRequestHeader("Content-type", "application/json");
  client.send(JSON.stringify(params));
};
