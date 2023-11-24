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

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title style={{textAlign: 'center'}}>Event</Title>
        <SubTitle style={{textAlign: 'center'}}>
          <div>Trân trọng báo tin</div>
          <div><b>Lễ thành hôn</b> của chúng tôi</div>
          <br/>
          <Row gutter={[16, 16]}>
            <Col span={isPortrait ? 23: 12}>
              <div>Dự tiệc</div>
            </Col>
            <Col span={isPortrait ? 23: 12}>
              <div>Đám cưới</div>
            </Col>
          </Row>
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Greeting;
