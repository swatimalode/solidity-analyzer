import React from "react";
import { Card } from "@material-ui/core";
import classes from "./Card.module.css";

const Card = (props) => {
    return(
        <Card className={classes.cart}>{props.children}</Card>
    )
}

export default Card;