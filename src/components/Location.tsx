import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 5% 5%' : '5% 0% 5% 5%',
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

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>Địa chỉ</Title>
        <SubTitle>
          <b>Nhà trai: </b> Số 5 - Ngách 58/1 đường Đình Xuyên - Huyện Gia Lâm- Thành phố Hà Nội
          <br />
          <br />
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d465.3622132562445!2d105.93629049301485!3d21.07674746137864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zU-G7kSA1IE5nw7UgNTgsIMSQw6xuaCBYdXnDqm4sIEdpYSBMw6JtLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700804158227!5m2!1svi!2s"
                  loading="lazy" width='97%' height='400'
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
          <b>Nhà gái: </b> Cầu Luận Hùng An Kim Động Hưng Yên - Hùng An - Kim Động - Hưng Yên
          <br />
          <br />
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.2880458599457!2d106.0159887!3d20.739116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b85f9a0b0403%3A0x56ca9aac9decde9!2zQ-G6p3UgTHXhuq1uIEjDuW5nIEFuIEtpbSDEkOG7mW5nIEjGsG5nIFnDqm4!5e0!3m2!1svi!2s!4v1700828227829!5m2!1svi!2s"
                  loading="lazy" width='97%' height='400'
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;
