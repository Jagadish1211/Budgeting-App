import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Button, Card } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

function ViewExpenseList() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        {/* <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header> */}
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export {ViewExpenseList, CustomToggle};
