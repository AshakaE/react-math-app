/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../components/App';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <App />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
