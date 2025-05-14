import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  background: #0077ff;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.div`
  color: #d32f2f;
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const validate = (value: string) => {
    // Accepts city names or 5-digit zip codes
    if (!value.trim()) return 'Please enter a city name or zip code.';
    if (/^\d{5}$/.test(value.trim())) return '';
    if (/^[a-zA-Z\s-]+$/.test(value.trim())) return '';
    return 'Invalid input. Enter a city name or 5-digit zip code.';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(query);
    if (err) {
      setError(err);
      return;
    }
    setError('');
    onSearch(query.trim());
  };

  return (
    <Form onSubmit={handleSubmit} role="search" aria-label="Search for city or zip code">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city or zip code"
        aria-label="City or zip code"
        disabled={loading}
      />
      <Button type="submit" disabled={loading} aria-busy={loading} aria-label="Search">
        {loading ? 'Loading...' : 'Search'}
      </Button>
      {error && <ErrorMsg role="alert">{error}</ErrorMsg>}
    </Form>
  );
};
