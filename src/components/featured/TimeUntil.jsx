import React from 'react';

import Slide from 'react-reveal/Slide';

const TimeUntil = () => {
    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
            </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                    </div>
                        <div className="countdown_tag">
                            Days
                    </div>
                    </div>


                    <div className="countdown_item">
                        <div className="countdown_time">
                            18
                    </div>
                        <div className="countdown_tag">
                            HS
                    </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            31
                    </div>
                        <div className="countdown_tag">
                            MINS
                    </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            2
                    </div>
                        <div className="countdown_tag">
                            Sec
                    </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default TimeUntil;