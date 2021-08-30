import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';

function BookList(props){
    const [data, setData]= useState([]);

    useEffect(()=>
    {
        const GetData = async () => {
            const result = await axios.get('https://localhost:44375/api/Books/GetALLBooks');
            setData(result.data);
        }
        GetData();
    }
    ,[]);

    return(
        <div className="animated fadeIn">
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Books List
                    </CardHeader>
                    <CardBody>
                        <Table hover bordered striped responsive size="sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Author</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, idx) => {
                                        return <tr key={idx}>
                                            <td>{item.Id}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.Author}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <button className="btn btn-warning">Edit</button>
                                                    <button className="btn btn-warning">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export default BookList;




