import React, { useState,useEffect } from "react";
import "./ImagePreview/style.css";
import { Camera, FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
export default function App() {
  const [dataURI, setdataURI] = useState('');

  // useEffect(() => {

    // function convertURIToImageData(URI) {
    //   return new Promise(function(resolve, reject) {
    //     if (URI == null) return reject();
    //     var canvas = document.createElement('canvas'),
    //         context = canvas.getContext('2d'),
    //         image = new Image();
    //     image.addEventListener('load', function() {
    //       canvas.width = image.width;
    //       canvas.height = image.height;
    //       context.drawImage(image, 0, 0, canvas.width, canvas.height);
    //       resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    //     }, false);
    //     image.src = URI;
    //   });
    // }
    // var URI = dataURI;
    // convertURIToImageData(URI).then(function(imageData) {
    //   // Here you can use imageData
    //   console.log(typeof imageData);
    // });
    function dataURItoBlob (){
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0)
          byteString = atob(dataURI.split(',')[1]);
      else
          byteString = unescape(dataURI.split(',')[1]);
  
      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      console.log(new Blob([ia], {type:mimeString}))
      console.log(ia)

      return new Blob([ia], {type:mimeString});

  }
  // function dataURLtoFile(filename) {

  //   var arr = dataURI.split(','),
  //   mime = arr[0].match(/:(.*?);/)[1],
  //   bstr = atob(arr[1]),
  //   n = bstr.length,
  //   u8arr = new Uint8Array(n);
    
  //   while(n--){
  //   u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   console.log(u8arr)
  //   console.log('>>>>>>>', new File([u8arr], filename, {type:mime}))

  //   return new File([u8arr], '/abc', {type:mime});
  //   }

  // },[dataURI])
  
  return (

    <div className="App">
      <Camera
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        isImageMirror={false}
        isFullScreen={true}
        isMaxResolution={true}
        sizeFactor={1}
        onTakePhoto={(dataURI) => {
          // console.log(typeof dataURI)
          setdataURI(dataURI);
          // console.log(dataURI);  
        }}

        
      />
      <a href={dataURI}  onClick={ () => dataURItoBlob()}>
        <img src={dataURI} alt="" />
        
      </a>
    </div>
  );

}
