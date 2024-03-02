import React from 'react';

interface IButton {
  btn_name: string;
  btn_type: 'submit' | 'reset' | 'button' | undefined;
  btn_style?: string;
}

export default function Button(props: IButton) {
  const { btn_name, btn_type, btn_style } = props;

  return (
    <button type={btn_type} className={`common_btn ${btn_style}`}>
      {btn_name}
    </button>
  );
}
