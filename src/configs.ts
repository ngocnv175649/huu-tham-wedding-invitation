import TitleImage from './resources/Title.png';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto6 from './resources/Gallery_Photo_6.png';

const Configs: ConfigsType = {
  weddingDate: 'Ngày 02 tháng 12 năm 2023',
  weddingLocation: 'Đình Xuyên - Gia Lâm - Hà Nội',
  groom: {
    name: 'Hữu',
    accountNumber: '○○은행 ***-***-******',
    fatherName: 'Hoà',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: 'Hà',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: 'Thắm',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
  ],
};

export type ConfigsType = {
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
