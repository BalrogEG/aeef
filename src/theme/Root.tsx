import React, {type ReactNode} from 'react';
import FeedbackWidget from '../components/FeedbackWidget';

type RootProps = {
  children: ReactNode;
};

export default function Root({children}: RootProps) {
  return (
    <>
      {children}
      <FeedbackWidget />
    </>
  );
}
