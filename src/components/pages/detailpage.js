import React from "react";
import { Card, Container, List } from "reactstrap";
import Detail from "../detail/details";
import File from "../detail/files";
import Invite from "../detail/invite";
import Payment from "../detail/payments";
import Task from "../detail/tasks";

export default function DetailPage(){
return(
    <Card className="section-main">
        <Container>
            <Card className="detailpage-bar">
                    <List>
                       <li><a href="#" className="active">Details</a></li>
                       <li><a href="#">Payments</a></li>
                       <li><a href="#">Files</a></li>
                       <li><a href="#">Tasks</a></li>
                       <li><a href="#">Invite</a></li>
                    </List>

            </Card>
            <Card className="detailpage-main">
<Detail></Detail>
<Payment></Payment>
<File></File>
<Invite></Invite>
<Task></Task>


            </Card>
        </Container>

    </Card>
)

}