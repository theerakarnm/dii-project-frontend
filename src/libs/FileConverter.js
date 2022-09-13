const fileToBase64 = (filename, filepath) => {
  return new Promise((resolve) => {
    var file = new File([filename], filepath);
    var reader = new FileReader(); // Read file content on file loaded event
    reader.onload = function (event) {
      resolve(event.target.result);
    }; // Convert data to base64
    reader.readAsDataURL(file);
  });
};

export default fileToBase64;
