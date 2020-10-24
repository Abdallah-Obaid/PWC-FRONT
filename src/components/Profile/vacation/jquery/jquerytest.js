import React from 'react';
import './jquerytest.scss';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';

class JqueryPart extends React.Component {
  alert() {
    Swal.fire({
      title: 'We got your request',
      text: 'Have a nice day <3 ',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });

  }
  render() {
    return (
      <div className="JqueryPart">
        <Button className="alret-button" onClick={this.alert}>Send</Button>
      </div>
    );
  }

}
export default JqueryPart;


