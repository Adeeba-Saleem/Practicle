import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle,CardSubtitle} from 'reactstrap';
    import { BiCalendarCheck } from "react-icons/bi";
    import {IoMdTime} from "react-icons/io";
    import { BsFillPeopleFill } from "react-icons/bs";
   

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
           events: [
                {
                  id: 0,
                  name:'Beach Cleanup with Friends organized by Habitat Friends',
                  image: 'assets/images/Joshua-Tree-Yoga-4-1.jpg',
                  Date: '13th Auguest',
                  seats:'12',
                  Time: '4.00pm-6PM',
                  price:'LKR 2,000',
                                        },
               {
                  id: 1,
                  name:'Beach Cleanup with Friends organized by Habitat Friends',
                  image: 'assets/images/new-zealanad.jpg',
                  Date: '13th Auguest',
                  seats:'12',
                  Time: '4.00pm-6PM',
                  price:'FREE',
                                        },
               {
                  id: 2,
                  name:'Beach Cleanup with Friends organized by Habitat Friends',
                  image: 'assets/images/Running-into-the-Water-scaled-e1581370585398.jpg',
                  Date: '13th Auguest',
                  seats:'12',
                  Time: '4.00pm-6PM',
                  price:'LKR 2,000',                  },
               {
                  id: 3,
                  name:'Beach Cleanup with Friends organized by Habitat Friends',
                  image: 'assets/images/images.jpg',
                  Date: '13th Auguest',
                  seats:'12',
                  Time: '4.00pm-6PM',
                  price:'FREE',                        }
               ],
        };
    }

    render() {
        const event = this.state.events.map((event) => {
            return (
                
              <div key={event.id} className="col-lg-3 col-md-4 col-sm-8 mt-3" >
                <Card >
                  <CardImg src={event.image} alt={event.name} height="150" />
                  <CardBody >
                  <CardTitle tag="h5" style={{textAlign: "left"}}  >{event.name}</CardTitle>
                  <CardSubtitle style={{textAlign: "left"}}><BiCalendarCheck/>{event.Date}</CardSubtitle>
                  <CardSubtitle style={{textAlign: "left"}}><IoMdTime/>{event.Time}</CardSubtitle>
                  <CardSubtitle style={{textAlign: "left"}}><BsFillPeopleFill/>{event.seats} seats</CardSubtitle>
                  <CardTitle style={{textAlign: "left"}} tag="h5">{event.price}</CardTitle>
                  </CardBody>
                </Card>
              </div>
            
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {event}
            </div>
          </div>
        );
    }
}

export default Event;