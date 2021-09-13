import React, {useState, useEffect} from 'react';
import { Button,Card,CardBody,CardFooter,Col,Container,Form,Input,InputGroup,Row  } from 'reactstrap';
import axios from 'axios';

function EditBook(props){
  const[book, setBook] = useState({Name:'', Author : ''});
  const url = 'https://localhost:44375/api/Books/bookDetails?id=' + props.match.params.id;

  useEffect(() =>{
      const GetData = async () => {
          const result = await axios.get(url)
           setBook(result.data)
      };
      GetData();
   },[])

   const onChange =(e)=>{
    e.persist();
    setBook({...book,[e.target.name]:e.target.value});
  }

  const UpdateBook =(e)=>{
    e.preventDefault();
    const data = {
      Id : props.match.params.id,
      Name : book.Name,
      Author : book.Author
    };
    const url = 'https://localhost:44375/api/Books/UpdateBook';
    axios.put(url,data)
    .then((result)=>{
      props.history.push('/BookList')
    });
  }

  return(
    <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="12" lg="10" xl="8">
          <Card className="mx-4">
            <CardBody className="p-4">
              <Form onSubmit={UpdateBook}>
                <h1>Update Book</h1>
                <InputGroup className="mb-3">
                  <Input type="text" name="Name" id="Name" placeholder="Name" value={book.Name} onChange = {onChange}/>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Input type="text" placeholder="Author" name="Author" id="Author" value={book.Author} onChange = {onChange}/>
                </InputGroup>

                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Form>
            </CardBody>
          </Card>
         </Col> 
      </Row>
    </Container>
  </div>
  )
}
export default EditBook;