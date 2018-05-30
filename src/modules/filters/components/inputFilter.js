import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';


export default class InputFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.selected,
            isValid: true
        };
        this.showError = this.showError.bind(this);


    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.selected !== prevState.value) { // check value was updated
            return {
                value: nextProps.selected // save value in state
            };
        }

        return null;
    }

    showError(value) {
        this.setState({
            isValid: !value
        })
    }

    render() {

        const props = this.props;

        const nameCapitalize = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);

        return (
            <FormGroup>
                <Label for={props.name}>{nameCapitalize}</Label>
                <Input type="text" name={props.name} id={props.name} pattern={props.pattern} placeholder={nameCapitalize + " to search"} value={this.state.value} onChange={event => {
                    this.setState({ value: event.target.value })
                    if (event.target.checkValidity()) {
                        this.showError(false);
                        props.onChange(event.target.value);
                    }
                    else { this.showError(true); }
                }} />

                <small className="error" style={{ visibility: this.state.isValid ? 'hidden' : 'visible' }}>The {nameCapitalize} is not valid</small>
            </FormGroup>
        )
    }
}

