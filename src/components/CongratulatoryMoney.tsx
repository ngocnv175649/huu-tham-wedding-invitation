import { styled } from '@stitches/react';
import { Button, Divider, Image, message, Modal } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';
import HongBao from './HongBao';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
  padding: '0% 0% 5% 0%'
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '10% 0% 10% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

const GridLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '50% 50%',
});

const Description = styled('p', {
  fontSize: '1em',
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: '8px',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Section>
      <Layout>
        <Title>Gửi lời chúc</Title>
        <SubTitle>Hãy gửi một món quà để bày tỏ lời chúc mừng của bạn.</SubTitle>
      </Layout>
      <GridLayout>
        <HongBao title="Chú rể" subTitle="Kiểm tra số tài khoản" onClick={() => setGroomVisible(true)} />
        <HongBao title="Cô dâu" subTitle="Kiểm tra số tài khoản" onClick={() => setBrideVisible(true)} />
      </GridLayout>
      <Modal
        title={<b>Số tài khoản chú rể</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Bấm vào số tài khoản để sao chép.</Description>]}
      >
        <div style={{ textAlign: 'center'}}>
          <div><b>Tên chủ TK: NGUYEN VAN HUU</b></div>
          <CopyToClipboard text={'3656886867996'}>
            <Button
              type="text"
              onClick={() => message.success('Số tài khoản đã được sao chép.')}
            >
              {'Số TK: 3656886867996'}
            </Button>
          </CopyToClipboard>
          <div>Ngân hàng TMCP Quân đội (MBBank)</div>
          <Image src={config.qrHuu} preview={false} />
        </div>
      </Modal>
      <Modal
        title={<b>Số tài khoản cô dâu</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Bấm vào số tài khoản để sao chép.</Description>]}
      >
        <div style={{ textAlign: 'center'}}>
          <div><b>Tên chủ TK: NGUYEN THI THAM</b></div>
          <CopyToClipboard text={'19034691755013'}>
            <Button
              type="text"
              onClick={() => message.success('Số tài khoản đã được sao chép.')}
            >
              {'Số TK: 19034691755013'}
            </Button>
          </CopyToClipboard>
          <div>Ngân hàng TMCP Kỹ thương Việt Nam (Techcombank)</div>
          <Image src={config.qrTham} preview={false} />
        </div>
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;
