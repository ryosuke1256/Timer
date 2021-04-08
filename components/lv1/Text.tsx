import React from 'react';

type Props = {
  Text: string;
  Style?: any;
};

const Text = ({ Text, Style }: Props) => {
  return <Style>{Text}</Style>;
};

export default Text;
