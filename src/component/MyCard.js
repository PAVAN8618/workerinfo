import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import img from "../image/photo.jpg";
// import Grid from "@material-ui/core";

const MyCard= ({ match })=>
{

    const getMatchesCard=() =>{
        return (
                <Card style={{marginTop:5}} style={{color:"black"}}>
                    <CardContent>
                        <Grid container justify="center" alignItems="center" spacing = {4}>
                            <Grid item>
                            <Typography variant="h4">{match["team-1"]}</Typography>
                             </Grid>
                             <Grid item>
                               

                            <img
                            style ={{ width:105 }}  src={img} alt=""/>
                             </Grid>
                             <Grid item>
                            <Typography variant="h4"> {match["team-2"]}</Typography>
                             </Grid>
                        </Grid>
                      
                        {/* <Typography variant = "h5"> This is my card</Typography> */}
                    </CardContent>
                    <CardActions style={{marginTop:30 }}>
                       <Grid container justify="center" spacing={3}>
                       <Button variant = "contained" color= "primary">
                            show Detail
                        </Button>
                        <Button variant = "contained" style={{marginLeft:7}} color= "primary">
                            Start Time {new Date(match.date).toLocaleString()} 
                        </Button>
                       </Grid>
                    </CardActions>

                </Card>
                



        )
    };
  
       return getMatchesCard();


 
};
export default MyCard;