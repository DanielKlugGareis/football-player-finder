import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';

export class AppTable extends Component {
    componentDidMount() {
        this.props.componentMount();
    };



    render() {

        const dataRows = this.props.data.map((player, index) => (
            <tr key={index}>
                <th  >{index + 1}</th>
                <td >{player.name}</td>
                <td >{player.position}</td>
                <td >{player.age}</td>
            </tr>
        ));

        return (
            <Container fluid={true}>
                <div >
                    <Table  responsive className="box header-fixed" >
                        <thead >
                            <tr>
                                <th >#</th>
                                <th >Name</th>
                                <th >Position</th>
                                <th >Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataRows}
                        </tbody>
                    </Table>
                </div>
            </Container>
        )
    }
}

export default AppTable


