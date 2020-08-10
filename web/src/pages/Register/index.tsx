import React, { useState } from 'react';
import PageHeader from '../../components/Page-Header';
import FileUpload from '../../components/File-Upload';
import { Form, Button, Input } from 'antd';
import "./styles.css";

const Register: React.FC = () => {
  const [profilePicture, updateProfilePicture] = useState<string>("");

  const onFinish = (values: any) => {
    values.photo = profilePicture;
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div id="page-mentor-register">
      <PageHeader />
      <div className="register-form">
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="personal-info">
            <div className="left" style={{ width: 104, height: 104 }}>
              <Form.Item
                name="photo"
              >
                <FileUpload updateProfilePicture={updateProfilePicture} />
              </Form.Item>
            </div>
            <div className="right" style={{ width: "calc(100% - 120px)", height: "100%" }}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your Name!' }]}
              >
                <span className="custom-label">Name</span>
                <Input type="text" id="name" />
              </Form.Item>
            </div>
          </div>

          <Form.Item
            name="mentoring"
            rules={[{ required: true, message: 'Please input your Mentoring!' }]}
          >
            <span className="custom-label">Mentoring</span>
            <Input type="text" id="mentoring" />
          </Form.Item>

          <Form.Item
            name="bio"
            rules={[{ required: true, message: 'Please input your Bio!' }]}
          >
            <span className="custom-label">Bio</span>
            <textarea id="bio" />
          </Form.Item>

          <Form.Item
            name="mentoring"
            rules={[{ required: true, message: 'Please input your Mentoring!' }]}
          >
            <span className="custom-label">Mentoring</span>
            <Input type="text" id="mentoring" />
          </Form.Item>

          <Form.Item
            name="cost"
            rules={[{ required: true, message: 'Please input your Cost!' }]}
          >
            <span className="custom-label">Cost</span>
            <Input type="text" id="cost" />
          </Form.Item>

          <Form.Item
            name="contact"
            rules={[{ required: true, message: 'Please input your Contact!' }]}
          >
            <span className="custom-label">Contact</span>
            <Input type="text" id="contact" />
          </Form.Item>
          <footer>
          <Button ghost shape="round" type="primary" size="large">Cancel</Button>
            <Form.Item>
              <Button shape="round" type="primary" size="large" htmlType="submit">Register</Button>
            </Form.Item>
          </footer>
        </Form>
      </div>
    </div >
  );
}

export default Register;