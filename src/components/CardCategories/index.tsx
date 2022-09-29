import Image, { StaticImageData } from 'next/image';
import { memo } from 'react';
import { Cards } from './styles';

interface PropsCardCategories {
  onclick: () => Promise<void>;
  image: StaticImageData;
  name: string;
}

function CardCategoriesComponent({
  onclick,
  image,
  name,
}: PropsCardCategories) {
  return (
    <Cards onClick={onclick}>
      <Image width={100} height={100} src={image} alt={name} />
      <p>{name}</p>
    </Cards>
  );
}

export const CardCategories = memo(
  CardCategoriesComponent,
  (prevProps, nextProps) => {
    return prevProps.image === nextProps.image;
  },
);
