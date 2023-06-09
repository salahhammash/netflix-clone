import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function ModalFavmovie(props) {
    // to add comment 

    const UpdateItem = async (e) => {

        e.preventDefault();
        // when you do a changes will show you what you changed without need to do a refresh  

        const serverURL = `${process.env.REACT_APP_URLSERVER}/getMovies/${props.MovieData.id}`;

        const newObj = { comment: e.target.changecomment.value }



        const UpdateButton = await axios.put(serverURL, newObj)
        const newData1 = UpdateButton.data;
        props.secfun(newData1)
        //(secFun)this is the name of the function that i passed from parent 
        // i should breng tha data that i want to update it from the get that i have inside the parent (favlist) but using (secfun) that store the get data inside it in (favmovie )
        // we took the data from the parent (favlist ) by favmovie 
        //لانو ما بقدر اروح مباشرة على الفيف ليست 

    }




    return (
        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.MovieData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={`https://image.tmdb.org/t/p/w500/${props.MovieData.poster_path}`} width='100%'></Image>

            </Modal.Body>
            <Modal.Footer>
                <Form onSubmit={UpdateItem}>

                    <Form.Group className="mb-3" >
                        <Form.Label >comment</Form.Label>
                        {/* to add a comment and prient it in the Data Base you should add a value & onchange */}
                        <Form.Control name='changecomment' defaultValue={props.MovieData.comment} as="textarea" rows={3} />
                        {/* //defaultValue to show me the text or the comment that i changed after update or before 
                        
                        &&&

                        should give it a name='changecomment' & pass the value inside function update
                        
                        */}

                    </Form.Group>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                  

                    <button className='btn btn-primary' type="submit" onClick={props.handleclose}>Submit</button>
                </Form>

            </Modal.Footer>

        </Modal>


    )
}

export default ModalFavmovie;          