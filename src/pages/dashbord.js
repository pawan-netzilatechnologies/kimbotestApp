import React from "react";
import { Card, Container, List } from "reactstrap";
import ProfileDetail from "../components/dashbord/details";
import Payments from "../components/dashbord/payments";
import Security from "../components/dashbord/security";
import Verification from "../components/dashbord/verification";
import Account from "../components/dashbord/account";

export default function Dashbord() {
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
            <li className="active">
              <span>Details</span>
            </li>
            <li>
              <span>Payments</span>
            </li>
            <li>
              <span>Security</span>
            </li>
            <li>
              <span>Verification</span>
            </li>
            <li>
              <span>Account</span>
            </li>
          </List>
        </Card>
        <Card className="detailpage-main ">
          <ProfileDetail></ProfileDetail>
          <Payments></Payments>
          <Security></Security>
          <Verification></Verification>
          <Account></Account>
        </Card>
      </Container>
    </Card>
  );
}
