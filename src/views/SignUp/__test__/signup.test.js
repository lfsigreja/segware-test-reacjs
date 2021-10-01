import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignUp from '../signup';
import { BrowserRouter } from 'react-router-dom';
import { api } from '../../../services/api.js';

jest.mock('../../../services/api.js');

const wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

describe('views::signin', () => {
  describe('When insert username', () => {
    it('Change username', () => {
      render(<SignUp />, { wrapper });
      const input = screen.getByPlaceholderText('Username');

      fireEvent.change(input, { target: { value: 'teste10' } });
      expect(input).toHaveValue('teste10');
    });
  });
  describe('When insert password', () => {
    it('Change password', () => {
      render(<SignUp />, { wrapper });
      const input = screen.getByPlaceholderText('Senha');

      fireEvent.change(input, { target: { value: 'teste10' } });
      expect(input).toHaveValue('teste10');
    });
  });
  describe('When press login button', () => {
    it('Send login request', () => {
      render(<SignUp />, { wrapper });

      api.post.mockResolvedValue({});

      fireEvent.click(screen.getByDisplayValue('Cadastrar'));
      expect(api.post).toHaveBeenCalledWith('sign-up', {});
    });
    describe('When resolve', () => {
      it('Save token', () => {});
      it('Redirect', () => {});
    });
    describe('When error', () => {
      it('Stay on page', () => {});
      it('Toast error', () => {});
    });
  });
});
