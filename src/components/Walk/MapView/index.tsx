import { NaverMapView } from '@mj-studio/react-native-naver-map';

const MapView = () => {
  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      isShowLocationButton={false}
      isShowZoomControls={false}
      isShowCompass={false}
    />
  );
};

export default MapView;
