import React, { Component } from 'react';

class InputTodo extends Component {

    state = {
        text: '',
    }

    handelChangInput = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = e => {
        if (e.which === 13) {
            this.props.save(this.state.text)
            this.setState({ text: '' })
        }
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        value={this.state.text}
                        onChange={this.handelChangInput}
                        onKeyDown={this.handleSubmit}
                        placeholder={this.props.placeholderInput} />
                </div>
            </div>
        );
    }
}

export default InputTodo;