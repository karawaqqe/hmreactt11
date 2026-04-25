import { Component } from "react";
import s from "./modal.module.css";

export class Modal extends Component {
    render() {
        return (
            <div className={s.backdrop}>
                <div className={s.modal}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
