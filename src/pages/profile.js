import React from "react";
import { Card, Container, List } from "reactstrap";
import MyProfile from "../components/profile/myprofile";

export default function Profile() {
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
            <li className="active">
              <a href="#">My profile</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">My portfolio</a>
            </li>
            <li>
              <a href="#">My experience</a>
            </li>
            <li>
              <a href="#">My education</a>
            </li>
          </List>
        </Card>
        <Card className="detailpage-main ">
          <MyProfile></MyProfile>
        </Card>
      </Container>
    </Card>
  );
}
