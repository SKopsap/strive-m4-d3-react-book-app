import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
function WarningSign(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.text}</Alert.Heading>
        <p>{props.text}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
export default WarningSign;
