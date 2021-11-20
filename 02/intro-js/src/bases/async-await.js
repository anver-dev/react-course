// Async nos convierte la funcion en una promesa
const getImage = async () => {
  try {
    const apiKey = "";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
      console.log("UPS!")
  }
};

getImage().then((resp) => {
  console.log(resp);
  const img = document.createElement("img");
  img.src = resp;

  document.body.append(img);
});
