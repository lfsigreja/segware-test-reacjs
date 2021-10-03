import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignUp from '../signup';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import register from '../../../services/register.js';
import { toast } from 'react-toastify';

jest.mock('../../../services/register.js');
jest.mock('react-toastify');

describe('views::signup', () => {
  const wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

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

      fireEvent.click(screen.getByDisplayValue('Cadastrar'));
      expect(register).toHaveBeenCalledWith({}, expect.anything());
    });
    describe('On success', () => {
      it('Redirect', async () => {
        register.mockImplementation((_, { onSuccess }) => onSuccess());
        const history = createMemoryHistory();
        history.push('/');
        render(<SignUp />, {
          wrapper: ({ children }) => (
            <Router history={history}>{children}</Router>
          )
        });

        fireEvent.click(screen.getByDisplayValue('Cadastrar'));
        return expect(history.location.pathname).toEqual('/');
      });
    });
    describe('On error', () => {
      it('Toast error', async () => {
        register.mockImplementation((_, { onError }) => onError());
        render(<SignUp />, { wrapper });

        fireEvent.click(screen.getByDisplayValue('Cadastrar'));

        return expect(toast.error).toHaveBeenCalledWith(
          'Ops, seu login falhou, tente novamente.',
          expect.anything()
        );
      });
    });
  });
});
