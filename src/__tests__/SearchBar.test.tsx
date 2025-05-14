import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../components/SearchBar';

describe('SearchBar', () => {
  it('renders input and button', () => {
    render(<SearchBar onSearch={() => {}} loading={false} />);
    expect(screen.getByPlaceholderText(/city or zip code/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('validates input and shows error', () => {
    render(<SearchBar onSearch={() => {}} loading={false} />);
    fireEvent.change(screen.getByPlaceholderText(/city or zip code/i), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/invalid input/i);
  });

  it('calls onSearch with valid input', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} loading={false} />);
    fireEvent.change(screen.getByPlaceholderText(/city or zip code/i), { target: { value: 'London' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(onSearch).toHaveBeenCalledWith('London');
  });
});
