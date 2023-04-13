import axios from 'axios'
const API_URL = "http://localhost:8080"

const cloudinaryUpload = (fileToUpload) => {
    console.log(fileToUpload)
    return axios.post(API_URL + '/uploads/cloudinary-upload', fileToUpload)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export default cloudinaryUpload
                                       