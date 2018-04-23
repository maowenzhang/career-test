import React from 'react';

export default class Spinner extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.show) {
            return (<div/>);
        }
        return (
            <div className="loading-placeholder">
                <svg viewBox="0 0 80 80">
                    <path fill="#05A7DF" d="M40 72C22.4 72 8 57.6 8 40S22.4 8 40 8s32 14.4 32 32c0 1.1-.9 2-2 2s-2-.9-2-2c0-15.4-12.6-28-28-28S12 24.6 12 40s12.6 28 28 28c1.1 0 2 .9 2 2s-.9 2-2 2z" transform="rotate(146.598 40 40)">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="0.9s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
                {/* <span>Loading...</span> */}
            </div>
        );
    }
}