export function getImage(filePath, imageName, extension) {
  let requiredPath = [];
  //let imagePath = `${filePath}${imageName}.${extension}`;
  let imagePath = `${filePath}${imageName}`;
  try {
    requiredPath = require(`../assets/${imagePath}`);
  } catch (e) {
    console.log(e);
    requiredPath = [];
  }
  return requiredPath;
}
