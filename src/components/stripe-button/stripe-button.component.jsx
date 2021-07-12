import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishablekey='pk_test_51JCQSiSEypcbkOPGUmEyRnmpUKpi3bG7hybO91lvUPDBSTSVJeIMEJbq4MuigFgCDJwpa8yeXflUvVizGjcLNiPd006SINK6mu';

    const onToken = token => {
        console.log(token);
        alert(`Payment Successful`);
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Fashion Fiesta Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}

        />
    );
};

export default StripeCheckoutButton;