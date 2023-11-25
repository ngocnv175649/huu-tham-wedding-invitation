import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';
import { Col, Row } from 'antd';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 5% 5%' : '5% 5% 5% 5%',
});

const Title = styled('div', {
  color: '#795548',
  width: '100%',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('div', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = () => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: isPortrait ? '90vh' : '90vh',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title style={{textAlign: 'center', fontSize: isPortrait ? '2.0em' : '3.5em'}} >
          <div>Trân trọng kính mời</div>
          <div>Tới dự <b>lễ thành hôn</b> của chúng tôi</div>
        </Title>
        <SubTitle style={{textAlign: 'center'}}>
          <br/>
          <Row gutter={[16, 16]}>
            <Col span={isPortrait ? 23: 12}>
              <div style={{ border: '1px solid black', padding: '10px', borderRadius: '10px' }}>
                <Title style={{fontSize: '1.5em' }}>Lễ thành hôn</Title>
                <div>Ngày 03 tháng 12 năm 2023</div>
                <div>Tại nhà trai lúc: 10:00 sáng</div>
                <div>Tại nhà gái lúc: 08:20 sáng</div>
              </div>
            </Col>
            <Col span={isPortrait ? 23: 12}>
              <div style={{ border: '1px solid black', padding: '10px', borderRadius: '10px' }}>
                <Title style={{fontSize: '1.5em' }}>Tiệc cưới</Title>
                <div>Ngày 03 tháng 12 năm 2023</div>
                <div>Tại nhà trai lúc: 17:00 chiều</div>
                <div>Tại nhà gái lúc: 07:00 sáng</div>
              </div>
            </Col>
          </Row>
          <div style={{padding: '20px'}}>Rất hân hạnh được đón tiếp!</div>
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Greeting;
