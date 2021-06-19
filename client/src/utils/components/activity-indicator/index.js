import React from 'react';
import Lottie from 'react-lottie-player';

import lottieJson from './lottie-source.json';

export const ActivityIndicator = () => (
  <Lottie loop animationData={lottieJson} play style={{ width: '100%', height: 100, margin: 'auto' }} />
);
