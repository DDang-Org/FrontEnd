import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterOwnerParamList } from '~navigation/RegisterOwnerNavigator';
import { ActionButton } from '~components/Common/ActionButton';
import { HomeScreen } from '~screens/Home';

type RegisterOwnerProps = NativeStackScreenProps<RegisterOwnerParamList,'OwnerAvatarModal'>;

export const OwnerAvatarModal = ({navigation}:RegisterOwnerProps)=>{
    
    return (
        <S.RegisterOwner>
            <ActionButton 
                text='다음~!'
            />
        </S.RegisterOwner>
    );
};