import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignIn from '../signin';
import { BrowserRouter } from 'react-router-dom';
import { api } from '../../../services/api.js';

jest.mock('../../../services/api.js');

const wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

describe('views::signin', () => {
  describe('When insert username', () => {
    it('Change username', () => {
      render(<SignIn />, { wrapper });
      const input = screen.getByPlaceholderText('Username');

      fireEvent.change(input, { target: { value: 'teste10' } });
      expect(input).toHaveValue('teste10');
    });
  });
  describe('When insert password', () => {
    it('Change password', () => {
      render(<SignIn />, { wrapper });
      const input = screen.getByPlaceholderText('Senha');

      fireEvent.change(input, { target: { value: 'teste10' } });
      expect(input).toHaveValue('teste10');
    });
  });
  describe('When press login button', () => {
    it('Send login request', () => {
      render(<SignIn />, { wrapper });

      api.post.mockResolvedValue({});

      fireEvent.click(screen.getByDisplayValue('Logar'));
      expect(api.post).toHaveBeenCalledWith('sign-in', {});
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
