import Image, { StaticImageData } from 'next/image';
import { Cards } from './styles';

interface PropsCardCategories {
  onclick: () => Promise<void>;
  image: StaticImageData;
  name: string;
}

export default function CardCategories({
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
