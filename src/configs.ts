import TitleImage from './resources/Title.png';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Image_1.jpg';
import GalleryPhoto2 from './resources/Image_2.jpg';
import GalleryPhoto3 from './resources/Image_3.jpg';
import GalleryPhoto4 from './resources/Image_4.jpg';
import GalleryPhoto5 from './resources/Image_5.jpg';
import GalleryPhoto6 from './resources/Image_6.jpg';
import GalleryPhoto7 from './resources/Image_7.jpg';
import GalleryPhoto8 from './resources/Image_8.jpg';
import GalleryPhoto9 from './resources/Image_9.jpg';
import GalleryPhoto10 from './resources/Image_10.jpg';
import GalleryPhoto11 from './resources/Image_11.jpg';
import GalleryPhoto12 from './resources/Image_12.jpg';
import GalleryPhoto13 from './resources/Image_13.jpg';
import GalleryPhoto14 from './resources/Image_14.jpg';
import GalleryPhoto15 from './resources/Image_15.jpg';

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
    GalleryPhoto7,
    GalleryPhoto8,
    GalleryPhoto9,
    GalleryPhoto10,
    GalleryPhoto11,
    GalleryPhoto12,
    GalleryPhoto13,
    GalleryPhoto14,
    GalleryPhoto15
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