// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = 'https://teachablemachine.withgoogle.com/models/YVbh9-SyG/';
let model;


// Load the image model and setup the webcam
async function init() {
  const modelURL = URL + 'model.json';
  const metadataURL = URL + 'metadata.json';

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  model = await tmImage.load(modelURL, metadataURL);
}

async function predict(image) {
  const prediction = await model.predict(image);
  const top = prediction.sort((a, b) => a.probability - b.probability).pop();
  return top;
}

async function predictAll() {
  const images = [...document.getElementsByTagName('img')];
  const predictions = {};

  for (const image of images) {
    const prediction = await predict(image);

    const label = prediction.className + ': ' + prediction.probability.toFixed(2);
    image.insertAdjacentHTML('afterend', `<span class="label">${label}</span>`);

    const key = image.src.replace(/(.*)\//, '');
    predictions[key] = prediction;
  }

  return predictions;
}

function download(object, name) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(object));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", name + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
function loading() {
  Promise.all(
    Array.from(document.images)
      .filter(img => !img.complete)
      .map(img => new Promise(resolve => { img.onload = img.onerror = resolve; })))
    .then(async () => {
      console.log('images finished loading');
    });
}

(async () => {
  await init()
  console.log('loaded');
  const predictions = await predictAll();
  download(predictions, 'predictions');
})();
