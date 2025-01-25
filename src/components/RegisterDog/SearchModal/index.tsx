import { useState, useEffect } from 'react';
import { Modal, Text, TouchableWithoutFeedback } from 'react-native';
import * as S from './styles';
import FormInput from '~components/Common/FormInput';
import breeds from '~assets/data/breeds.json';
import { TextBold, TextRegular } from '~components/Common/Text';

interface SearchModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  setBreed?: (breed: string) => void;
}

export const SearchModal = ({ isVisible, setIsVisible, setBreed }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults(breeds.breeds.sort((a, b) => a.localeCompare(b)));
      return;
    }

    const filteredResults = breeds.breeds
      .filter(breed => breed.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) =>
        !a.toLowerCase().startsWith(searchTerm.toLowerCase()) && b.toLowerCase().startsWith(searchTerm.toLowerCase())
          ? 1
          : -1,
      );
    setSearchResults(filteredResults);
  }, [searchTerm]);

  const highlightText = (text: string) => {
    if (!searchTerm) return <Text>{text}</Text>;

    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return (
      <Text>
        {parts.map((part, index) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <TextBold fontSize={15} color="darken" key={index}>
              {part}
            </TextBold>
          ) : (
            <Text key={index}>{part}</Text>
          ),
        )}
      </Text>
    );
  };

  const handlePressResult = (breed: string) => {
    // setBreed(breed);
    toggleModal();
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade" onRequestClose={toggleModal}>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <S.ModalOverlay>
          <TouchableWithoutFeedback>
            <S.SearchContainer>
              <FormInput autoFocus onChangeText={setSearchTerm} value={searchTerm} placeholder="견종을 검색하세요" />
              <S.SearchResults showsVerticalScrollIndicator indicatorStyle="black">
                {searchResults.map((result, index) => (
                  <S.SearchResult key={index} data-breed={result} onPress={() => handlePressResult(result)}>
                    {highlightText(result)}
                  </S.SearchResult>
                ))}
                <S.SearchResult data-breed="믹스견">
                  <TextRegular fontSize={15}>믹스견</TextRegular>
                </S.SearchResult>
                <S.SearchResult data-breed="기타">
                  <TextBold fontSize={15}>기타</TextBold>
                </S.SearchResult>
              </S.SearchResults>
            </S.SearchContainer>
          </TouchableWithoutFeedback>
        </S.ModalOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
