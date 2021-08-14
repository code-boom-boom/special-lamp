/**
 * Ratings Stats
 */
import React, { Component } from "react";

// rct card
import { RctCard, RctCardContent, RctCardFooter } from "Components/RctCard";

// intl messages
import IntlMessages from "Util/IntlMessages";

class RatingsStats extends Component {

    state = {
        rating: 4.5
    }

    render() {
        const { rating } = this.state;
        return (
            <RctCard
                customClasses="overflow-hidden"
                heading={ <IntlMessages id="widgets.ratings" /> }
            >
                <RctCardContent noPadding>
                    <div className="p-20 d-flex justify-content-between">
                        <span className="fs-14">Average Ratings</span>
                    </div>
                </RctCardContent>
            </RctCard>
        );
    }
}

export default RatingsStats;