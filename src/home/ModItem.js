import React from 'react';
import { useState } from 'react';
import {Collapse, Card, Container} from 'react-bootstrap';

function Example(props) {
    // Declare a new state variable, which we'll call "count"
    const [open, setOpen] = useState(false);

  return (
    <Card className="text-center" style={{margin: '20px', minWidth: '250px', borderColor: '#af0404', backgroundColor: '#252525', cursor:'pointer'}} onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}>
      <Card.Body>
      <h5>{props.title}</h5>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {props.text}
        </div>
      </Collapse>
      </Card.Body>
    </Card>
  );
}

export default Example;