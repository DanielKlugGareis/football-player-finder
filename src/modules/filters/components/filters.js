import React from 'react';
import { Container, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import SelectCombo from './selectCombo';
import InputFilter from './inputFilter';

const Filters = props => (
    <Container fluid={true}>
        <Row className="box">
            <Col>
                <InputFilter name="name" pattern="[a-zA-Z\s]+" onChange={props.setFiltersName} selected={props.filtersName} />
            </Col>
            <Col>
                <SelectCombo onChange={props.setFiltersPosition} selected={props.filtersPosition} />
            </Col>
            <Col>
                <InputFilter name="age" pattern="1[8-9]|2[0-9]|3[0-9]|40" onChange={props.setFiltersAge} selected={props.filtersAge} />
            </Col>
            <Col className="buttons-container">
                <Button color="primary" className="button-search" onClick={() => {
                    if (props.filtersAge || props.filtersPosition || props.filtersName) {
                        props.setSearching(true)
                    }
                }} >Search</Button>
                <Button className="button-clear" onClick={() => {
                    props.setClear();
                }
                }>Clear</Button>
            </Col>
        </Row>
    </Container>
);

export default Filters;