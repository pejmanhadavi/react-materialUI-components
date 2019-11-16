import React, { useState, useEffect, useRef } from 'react';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

const Discount = () => {

    const [discount, setDiscount] = useState(0);

    const porcentage = () => {
        if (discount < 30) {
            setDiscount(discount + 1);
        }
    };

    const mounted = useRef();

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            setTimeout(() => {
                porcentage();
            }, 30);
        }
    });

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade
                    onReveal={() => porcentage()}>
                    <div className="discount_porcentage">
                        <span>{discount}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>This is some text</h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>

                        <div>
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link="#" />
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Discount;
