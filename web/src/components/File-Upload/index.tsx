import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

import './styles.css';

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

interface PropsFunction {
  updateProfilePicture: (profilePicture: string) => void
}

const FileUpload: React.FC<PropsFunction> = ({updateProfilePicture}) => {
  const [loading, updateLoading] = useState(false);
  const [imgUrl, updateImgUrl] = useState("");

  const handleChange = () => {
    updateLoading(true);
  };

  const uploadFile = async ({ file }: { file: any }) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'default-preset');
    const res = await fetch('https://api.cloudinary.com/v1_1/dfeicxpqv/image/upload', {
      method: 'POST',
      body: data
    });
    const response = await res.json();
    console.log(response);
    updateLoading(false);
    updateImgUrl(response.secure_url);
    updateProfilePicture(response.secure_url);
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload photo</div>
    </div>
  );
  return (
    <ImgCrop>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={uploadFile}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imgUrl ? <img src={imgUrl} alt="avatar" style={{ borderRadius: "50%", width: '100%' }} /> : uploadButton}
      </Upload>
    </ImgCrop>
  );
}

export default FileUpload;