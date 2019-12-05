export function getImage(filePath, imageName, extension) {
  let requiredPath = [];
  let imagePath = `${filePath}${imageName}.${extension}`;
  try {
    requiredPath = require(`../assets/${imagePath}`);
  } catch (e) {
    console.log(e);
    requiredPath = [];
  }
  return requiredPath;
}
