import React from 'react';
import type { Node } from 'react';


type Props = {
  className: string,
  id: string | number,
  labelContent?: string,
  showLabel?: boolean,
  type?: string,
  placeholder?: string,
  value?: string,
  onChange?: Function,
  inputClass:string,
    
};


const Input = ({
  className,
  id,
  labelContent,
  showLabel,
  type,
  placeholder,
  value,
  onChange,
  inputClass,
  ...others
}: Props): Node => {
  const props = {};
  if (typeof value !== 'undefined') {
    props.value = value;
  }

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="small"
      >
         {showLabel ? (<span>{labelContent}</span>):null}
          <input
            id={id}
            type={type}
            placeholder={placeholder || null}
            value={value}
            onChange={onChange}
            className={inputClass}
            {...others}
          />
      </label>
    </div>
  );
};

Input.defaultProps = {
  className:'',
  type: 'text',
  labelContent: null,
  showLabel: true,
  placeholder: '',
  value: undefined,
  onChange: () => {},
};

export default Input;



