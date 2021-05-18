import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Quote from '../../components/Quote';

describe('Quote', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Quote />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
