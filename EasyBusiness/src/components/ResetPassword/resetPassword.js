import React ,{Component} from 'react';
import './resetPassword.css';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button} from 'antd';

class ResetPasswordForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
     
      <Form onSubmit={this.handleSubmit} className="reset-password-form">
        <Form.Item>
          <label id="reset-password-label">Reset Your Password</label>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('phoneNumber', {
            rules: [{ required: true, message: 'Please input your Phone Number!' }],
          })(
            <Input
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="number"
              placeholder="Phone Number"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="reset-password-form-button" id="reset-password-btn">
            Reset
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedResrtPasswordForm = Form.create({ name: 'reset-password' })(ResetPasswordForm);


export default WrappedResrtPasswordForm;