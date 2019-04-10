let randomSol = Math.floor(Math.random() * 100) + 10;
let img = document.getElementById('img');
let cameraName = document.getElementById('camera-name');
let roverName = document.getElementById('rover-name');
let earthDate = document.getElementById('earth-date');

console.log(randomSol, 'randomSol');
const data = fetch(
  `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol}&api_key=XY3aZ7bAPyulieAdlIpUWpCpHbBMuSGcaEKhxBor`
)
  .then(res => res.json())
  .then(res => {
    let randomNumber = Math.floor(Math.random() * res.photos.length);
    let rover = res.photos[randomNumber];
    console.log(rover);
    img.innerHTML = `<img src="${rover.img_src}" alt="" />`;
    cameraName.innerHTML = `${rover.camera.full_name}`;
    roverName.innerHTML = `Photo Taken By: ${rover.rover.name}`;
    earthDate.innerHTML = `Photo Take On: ${rover.earth_date}`;
  });
