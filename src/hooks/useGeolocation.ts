import ky from 'ky';
import Config from 'react-native-config';

export const useGeolocations = () => {
  const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
    try {
      const response: any = await ky
        .get('https://dapi.kakao.com/v2/local/geo/coord2address.json', {
          searchParams: {
            x: longitude,
            y: latitude,
          },
          headers: {
            Authorization: `KakaoAK ${Config.KAKAO_REST_API_KEY}`,
          },
        })
        .json();
      console.log('response', response);
      if (response.documents.length > 0) {
        const region_2depth_name = response.documents[0].address?.region_2depth_name || '';
        const region_3depth_name = response.documents[0].address?.region_3depth_name || '';
        const result = region_2depth_name + ' ' + region_3depth_name;

        if (result.split(' ').join('')) {
          return result.split(' ').slice(-2).join(' ');
        }
        return '주소 정보 없음';
      } else {
        return '주소 정보 없음';
      }
    } catch (error) {
      console.error('Reverse Geocoding 에러:', error);
      throw error;
    }
  };

  const fetchAddress = async () => {
    const latitude = 37.499668;
    const longitude = 127.040612;
    try {
      const address = await getAddressFromCoordinates(latitude, longitude);
      console.log('가져온 주소:', address);
      return address;
    } catch (error) {
      console.error('주소 가져오기 실패:', error);
      return '주소 정보 없음';
    }
  };

  return fetchAddress();
};
