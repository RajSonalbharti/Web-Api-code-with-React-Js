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

    const DeleteBook = (id) => {
        axios.delete(`https://localhost:44375/api/Books/DeleteBook?id=${id}`)
        .then((result)=>{
            //alert('data is deletd')
             const GetData = async () => {
             const result = await axios.get('https://localhost:44375/api/Books/GetALLBooks');
                setData(result.data);
            }
             GetData();
        })
        .catch((error)=>{
            alert('data is error');
        });
    }   
    
        const EditBook = (id) => {
        props.history.push({
         pathname: '/edit/' + id
     });
 };
 
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
                                    <th>Name</th>
                                    <th>Author</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, idx) => {
                                        return <tr key={idx}>
                                            <td>{item.Name}</td>
                                            <td>{item.Author}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <button className="btn btn-warning" onClick={()=>EditBook(item.Id)}>Edit</button>
                                                    <button className="btn btn-warning" onClick={()=>DeleteBook(item.Id)}>Delete</button>
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







