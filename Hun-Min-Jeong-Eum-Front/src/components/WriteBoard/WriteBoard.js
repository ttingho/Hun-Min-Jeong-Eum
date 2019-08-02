import React, { Component } from 'react';

class WriteBoard extends Component {
    render() {
        return (
            <div className="WriteBoard">
                <div className="WriteBoard-header">
                    <div className="WriteBoard-header-cancle"></div>
                    <div className="WriteBoard-header-image"></div>
                    <div className="WriteBoard-header-tools">
                        <div className="WriteBoard-header-tools-pen"></div>
                        <div className="WriteBoard-header-tools-pen"></div>
                        <div className="WriteBoard-header-tools-pen"></div>
                        <div className="WriteBoard-header-tools-Color">
                            <div className="WriteBoard-header-tools-Color-current"></div>
                            <div className="WriteBoard-header-tools-Color-black"></div>
                            <div className="WriteBoard-header-tools-Color-red"></div>
                            <div className="WriteBoard-header-tools-Color-blue"></div>
                        </div>
                    </div>
                    <div className="WriteBoard-header-download"></div>
                </div>
            </div>
        );
    }
}

export default WriteBoard;