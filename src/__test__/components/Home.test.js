import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../components/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Home />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
