import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { handleToken } from '../actions/payment';

class Payment extends React.Component {
  render() {
    const labelStyle = { color: '#f54336' };

    return (
      <StripeCheckout
        name="365"
        description="$3(CAD) for 365 days of messages"
        amount={300}
        currency="CAD"
        token={(token) => this.props.dispatch(handleToken(token))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <RaisedButton
          label="Payment"
          secondary={true}
          labelStyle={labelStyle}
        />
      </StripeCheckout>
    );
  }
}

export default connect()(Payment);
