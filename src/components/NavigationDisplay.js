
// VisionPro_HUD/src/components/NavigationDisplay.js
// Authors: Jacob Thomas Messer Redmond, ChatGPT-4o
// UUID: 900100000004
// Description: Shows navigation information in the Vision Pro application.

import React from 'react';
import { Logger, ErrorHandler } from '../utils';

class NavigationDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.logger = new Logger('NavigationDisplay');
        this.errorHandler = new ErrorHandler();
    }

    componentDidMount() {
        this.logger.log('NavigationDisplay mounted');
    }

    render() {
        const { navigationData } = this.props;

        return (
            <div className="navigation-display">
                <p>Current Location: {navigationData.currentLocation}</p>
                <p>Destination: {navigationData.destination}</p>
                <p>ETA: {navigationData.eta}</p>
            </div>
        );
    }
}

export default NavigationDisplay;
// END
