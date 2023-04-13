import cloudinaryUpload from './service/uploads';
import './App.css';

import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
const myImage = new CloudinaryImage('cld-sample-5', {cloudName: 'duytmd7ue'}).resize(fill().width(100).height(150));
console.log(myImage);
const App = () => {
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0],'file');
    console.log(e.target.files[0]);
    // console.log(uploadData);
    // cloudinaryUpload(e.target.files[0]);
    cloudinaryUpload(uploadData)
  }
  
  return (
    <div >
      <div style={{ margin: 10 }}>
        <label style={{ margin: 10 }}>Cloudinary:</label>
        
        <input
          type="file"
         
          onChange={(e) => handleFileUpload(e)}
        />

        
      </div>
      
      <AdvancedImage style={{with:100, height:200}} cldImg={myImage} />
    </div>
  );
};


export default App;
