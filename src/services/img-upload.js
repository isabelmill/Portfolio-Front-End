import axios from 'axios';

// AXIOS
export const uploadImg = async (file) => {
    const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;
    const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME; 
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const FORM_DATA = new FormData();
    FORM_DATA.append('file', file);
    FORM_DATA.append('upload_preset', UPLOAD_PRESET);
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA);
        return res.data;
    } catch (err) {
        console.error('ERROR!', err);
    }
};