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

export const base64URLtoFile = (dataUrl, filename) => {
  var arr = dataUrl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export default fileToBase64;
