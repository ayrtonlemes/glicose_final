import React from 'react';

import animationData from './animation_glico_predict.json';  // O caminho para o seu arquivo JSON da animação
import Lottie from 'react-lottie';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true, // Define se a animação será repetida em loop
    autoplay: true, // Inicia automaticamente
    animationData: animationData, // Dados da animação (do arquivo JSON)
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Controle sobre o ajuste da animação
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
