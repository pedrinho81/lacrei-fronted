import { render, fireEvent,  } from '@testing-library/react';
import { Header, Links } from '../components/Layout/Header';

describe('Header', () => {
  test('should render text', () => {
    const { getByText } = render(<Header currencyHref="/" />);
    const Title = getByText('Lacrei');
    expect(Title);

    Links.forEach((link) => {
      const Link = getByText(link.label);
      expect(Link);
    });

  });
});

describe('Header', () => {
  test('should change pathname after clickng on a link', () => {
    let  currencyHref = '/';
    const { getByText } = render(<Header currencyHref={currencyHref} />);

    Links.forEach((link) => {
      const Link = getByText(link.label);
      fireEvent.click(Link);
      window.history.pushState({}, link.label, link.href );
      expect(window.location.pathname).toBe(link.href)
    });

  });
});


