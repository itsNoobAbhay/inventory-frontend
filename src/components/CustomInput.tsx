import { Col, Row } from 'antd';

interface Props {
  name: string;
  errors?: any;
  label: string;
  type?: string;
  register: any;
  required?: boolean;
  defaultValue?: any;
  min?: string;
}


const CustomInput = ({
  name,
  errors = {},
  required = false,
  label,
  register,
  type = 'text',
  min,
}: Props) => {
  return (
    <Row>
      <Col xs={{ span: 23 }} lg={{ span: 6 }}>
        <label htmlFor={name} className='label'>
          {label}
        </label>
      </Col>
      <Col xs={{ span: 23 }} lg={{ span: 18 }}>
        <input
          id={name}
          type={type}
          placeholder={label}
          {...register(name, {
            required: required,
            ...(name === 'contactNo' && {
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be exactly 10 digits',
              },
            }),
          })}
          className={`input-field ${errors[name] ? 'input-field-error' : ''}`}
          min={min}
        />
        {errors[name] && <p className='error-message'>{errors[name].message}</p>}
      </Col>
    </Row>
  );
};

export default CustomInput;