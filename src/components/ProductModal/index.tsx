import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import {
  CloseButton,
  Footer,
  FooterContainer,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  PriceContainer,
} from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.1.112:3001/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Text $size={24} $weight="600">
          {product.name}
        </Text>
        <Text $color="#666" style={{ marginTop: 8 }}>
          {product.description}
        </Text>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text $weight="600">Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              style={{ marginTop: 16 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text $size={14} $color="#666" style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text $color="#666">Preço</Text>
            <Text $weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button
            onPress={() => {
              alert('Adicionar ao pedido');
            }}
          >
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}