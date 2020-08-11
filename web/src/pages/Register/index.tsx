import React, { useState } from 'react';
import PageHeader from '../../components/Page-Header';
import FileUpload from '../../components/File-Upload';
import { Form, Button, Input, InputNumber, Divider, TimePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import "./styles.css";

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = TimePicker;

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
                <span className="custom-label">Full Name:</span>
                <Input type="text" id="name" />
              </Form.Item>
            </div>
          </div>
          <div className="body-info">

            <div className="inline">
              <Form.Item
                name="mentoring"
                className="mentoring"
                rules={[{ required: true, message: 'Please input your Mentoring!' }]}
              >
                <span className="custom-label">Status:</span>
                <Input type="text" id="mentoring" />
              </Form.Item>

              <Form.Item
                name="contact"
                className="contact"
                rules={[{ required: true, message: 'Please input your Contact!' }]}
              >
                <span className="custom-label">Phone Number:</span>
                <Input type="text" id="contact" />
              </Form.Item>

            </div>
            <Form.Item
              name="bio"
              rules={[{ required: true, message: 'Please input your Bio!' }]}
            >
              <span className="custom-label">About you:</span>
              <TextArea rows={4} id="bio" />
            </Form.Item>

            <Form.Item
              name="cost"
              rules={[{ required: true, message: 'Please input your Cost!' }]}
            >
              <span className="custom-label">Cost</span>
              <br />
                <InputNumber
                  type="text"
                  id="cost"
                  defaultValue={10.50}
                />
            </Form.Item>
          </div>
          <Divider>Mentoring</Divider>
          <div className="mentoring-container">
            <Input.Group className="input-group">
              <Select defaultValue="Sunday" style={{ width: '40%' }}>
                <Option value="1">Sunday</Option>
                <Option value="2">Monday</Option>
                <Option value="3">Tuesday</Option>
                <Option value="4">Wednesday</Option>
                <Option value="5">Thursday</Option>
                <Option value="6">Friday</Option>
                <Option value="7">Saturday</Option>
              </Select>
              <RangePicker
                use12Hours format="h:mm a"
                picker='time'
                style={{ width: '55%' }}
              />
            </Input.Group>
            <Button type="dashed" size="small" style={{ width: '100%' }}>
              <PlusOutlined /> Add new time
            </Button>
          </div>
          <footer>
            <Button ghost shape="round" type="primary" size="large">Cancel</Button>
            <Form.Item>
              <Button block shape="round" type="primary" size="large" htmlType="submit">Register</Button>
            </Form.Item>
          </footer>
        </Form>
      </div>
    </div >
  );
}

export default Register;