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
            <div className="mb-3 input-todo">
                <input type="text"
                    className="form-control"
                    value={this.state.text}
                    onChange={this.handelChangInput}
                    onKeyDown={this.handleSubmit}
                    placeholder={this.props.placeholderInput} />
            </div>
        );
    }
}

export default InputTodo;