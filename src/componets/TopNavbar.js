import React, { Component } from 'react'
import  "./TopNavbar.css";

class TopNavbar extends Component {
    render() {
        return (
            <div className="">
                <div className="top__nav ">
                    <div className="contact__info ">
                        <div className="contact__item"><i className="envelope outline icon"></i>hello.blurex.com</div>
                        <div className="contact__item"><i className="phone icon"></i> +1(152)8544555</div>
                        <div className="contact__item"><i class="lightbulb outline icon"></i> Quetions and answer</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopNavbar
