import Gallery from './components/Gallery';
import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import Location from './components//Location';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import Configs from './configs';
import { Layout } from 'antd';
import ReactHowler from 'react-howler'

const { Footer } = Layout;

function App() {
  return (
    <main style={{ height: '100%' }}>
      <TitleLayout config={Configs} />
      <Greeting />
      <Gallery config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <Footer
        style={{
          background: '#D7CCC8',
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Hữu ❤️ Thắm - 03.12.2023
      </Footer>
      <ReactHowler
        src={Configs.music}
        playing={true}
        loop={true}
      />
    </main>
  );
}

export default App;
