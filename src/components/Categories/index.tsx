import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={({ _id }) => _id}
      horizontal
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: category }) => (
        <Category>
          <Icon>
            <Text>{category.icon}</Text>
          </Icon>
          <Text $size={14} $weight="600">
            {category.name}
          </Text>
        </Category>
      )}
    />
  );
}
