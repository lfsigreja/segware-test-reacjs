import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SignIn from '../signin';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import login from '../../../services/loginService.js';
import { toast } from 'react-toastify';
jest.mock('../../../services/loginService.js');
jest.mock('react-toastify');

describe('views::signin', () => {
  const wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

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

      fireEvent.click(screen.getByDisplayValue('Logar'));
      expect(login).toHaveBeenCalledWith({}, expect.anything());
    });
    describe('On success', () => {
      it('Redirect', async () => {
        login.mockImplementation((_, { onSuccess }) => onSuccess());
        const history = createMemoryHistory();
        history.push('/');
        render(<SignIn />, {
          wrapper: ({ children }) => (
            <Router history={history}>{children}</Router>
          )
        });

        fireEvent.click(screen.getByDisplayValue('Logar'));
        return expect(history.location.pathname).toEqual('/');
      });
    });

    describe('On error', () => {
      it('Toast error', async () => {
        login.mockImplementation((_, { onError }) => onError());
        render(<SignIn />, { wrapper });

        fireEvent.click(screen.getByDisplayValue('Logar'));

        return expect(toast.error).toHaveBeenCalledWith(
          'Ops, seu login falhou, tente novamente.',
          expect.anything()
        );
      });
    });
  });
});
