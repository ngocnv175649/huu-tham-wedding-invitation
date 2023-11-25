import { ConfigsType } from '../configs';
import { useState } from 'react';
import ReactHowler from 'react-howler';
type AudioConfig = {
  config: ConfigsType;
}

const AudioPlayer = ({config}: AudioConfig) => {

  const [init, setInit] = useState<boolean>(false);

  setTimeout(() => {
    setInit(true);
  }, 2000)

  return (
    <ReactHowler src={config.music} playing={init} loop={true} preload={true}></ReactHowler>
  );
}


export default AudioPlayer;