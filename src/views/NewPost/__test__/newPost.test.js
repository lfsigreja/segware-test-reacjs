import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NewPost from '../newPost';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import post from '../../../services/postService.js';
import { toast } from 'react-toastify';

jest.mock('../../../services/postService.js');
jest.mock('react-toastify');

describe('views::newPost', () => {
  const wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
  it('Write content', () => {
    render(<NewPost />, { wrapper });
    const input = screen.getByPlaceholderText(
      'O que você gostaria de ensinar hoje?'
    );

    const token = true;

    fireEvent.change(input, { target: { value: 'TESTE' } });
    expect(input).toHaveValue('TESTE');
  });
});
