import { render, screen } from '@testing-library/react'
import { createElement } from 'react';
import App from '../containers/AppScreens/Dashboard/Components/header'




it('App rendered ', () => {


    render(<App />);
    const LinkElement = screen.getByText('Admin');
    expect(LinkElement).toBeInTheDocument();


})