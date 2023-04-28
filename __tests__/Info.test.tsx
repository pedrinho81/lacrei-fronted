import { render} from '@testing-library/react';
import { Info } from "../components/Info";

describe('Info', () => {
  test('should render dynamic data by props', () => {
    const { getByText,
      getByAltText,
    } = render(
      <Info
        img={{
          alt: 'Imagem de test',
          src: '/imgs/rafiki2.png'
        }}
        title="Test title"
        message="message of teste"
        borderOnLeft={true}
        buttons={[
          {
            bg: 'green',
            color: 'white',
            text: 'botão test',
            href: '/pessoa-usuaria'
          }]} />
    );
    expect(getByAltText('Imagem de test'))
    expect(getByText('Test title'))
    expect(getByText('message of teste'))
    expect(getByText('botão test'))

  });
});
