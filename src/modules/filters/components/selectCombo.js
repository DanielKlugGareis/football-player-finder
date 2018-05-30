import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';

const options = [
    'Attacking Midfield',
    'Central Midfield',
    'Centre-Back',
    'Centre-Forward',
    'Defensive Midfield',
    'Keeper',
    'Left Midfield',
    'Left Wing',
    'Left-Back',
    'Right-Back',
];

export default class SelectCombo extends Component {
    render() {

        const props = this.props;
        const optionItems = options.map(option => (
            <option key={option} value={option}>{option}</option>
        ));        
        
        return (
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect"  onChange={event => {
                   props.onChange(event.target.value);
                }}>
                    <option value={props.selected}>Select position</option>
                    {optionItems}
                </Input>
            </FormGroup>
        )
    }
}

