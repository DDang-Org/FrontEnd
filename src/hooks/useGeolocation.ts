import ky from 'ky';
import Config from 'react-native-config';
import Geolocation from '@react-native-community/geolocation';

interface LatLngType {
  latitude: number;
  longitude: number;
}

export const useGeolocations = () => {
  const getCurrentLatLng = async (): Promise<LatLngType> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        error => {
          console.error('위치 가져오기 실패:', error);
          reject(new Error('현재 위치를 가져올 수 없습니다.'));
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    });
  };

  const getAddressFromCoordinates = async (latitude: number, longitude: number): Promise<string> => {
    try {
      const response = await ky
        .get('https://dapi.kakao.com/v2/local/geo/coord2address.json', {
          searchParams: {
            x: longitude,
            y: latitude,
          },
          headers: {
            Authorization: `KakaoAK ${Config.KAKAO_REST_API_KEY}`,
          },
        })
        .json<{
          documents: Array<{
            address?: {
              region_2depth_name?: string;
              region_3depth_name?: string;
            };
          }>;
        }>();

      if (response.documents.length > 0) {
        const { region_2depth_name = '', region_3depth_name = '' } = response.documents[0].address || {};

        if (region_2depth_name || region_3depth_name) {
          return `${region_2depth_name} ${region_3depth_name}`.split(' ').slice(-2).join(' ').trim();
        }
      }

      return '주소 정보 없음';
    } catch (error) {
      console.error('Reverse Geocoding 에러:', error);
      throw new Error('주소 변환에 실패했습니다.');
    }
  };

  const fetchAddress = async (): Promise<string> => {
    try {
      const { latitude, longitude } = await getCurrentLatLng();
      return await getAddressFromCoordinates(latitude, longitude);
    } catch (error) {
      console.error('주소 가져오기 실패:', error);
      return '주소 정보 없음';
    }
  };

  return { fetchAddress };
};
