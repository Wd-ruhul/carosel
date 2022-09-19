const images = [
  `images/1.jpg`,
  `images/2.jpg`,
  `images/3.jpg`,
  `images/4.jpg`,
  `images/5.jpg`,
];

let index =
const imageContainer = document.getElementById(`image-container`);
setInterval(() => {
  if (index === images.length) {
    index = 0;
  }    
  const imagelink = images[index];
  imageContainer.setAttribute(`src`, imagelink);

  index++;
}, 1000);

        
