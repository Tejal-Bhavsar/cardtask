import React from 'react'
import { makeStyles ,CardMedia} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    height: 200
  },
  media: {
    height: 140,
  },
});

export default function CardA({content,res}) {
  const classes = useStyles();
    return (
        <>
        {content ? 
    <Card mb={4} className={classes.root} variant="outlined">
      <CardContent>
       {/*  className={classes.media} <img src="" className /> */}
        <Typography  color="Secondary" gutterBottom>
         email:{content.email}
        </Typography>
        <Typography variant="h5" component="h2">
       firstname:{content.first_name}
        </Typography>
        <Typography color="Secondary">
         lastname:{content.last_name}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        
        </Typography>
      </CardContent> 
      
    </Card> :   <Card mb={4} className={classes.root} variant="outlined">
      <CardContent>
       {/*  className={classes.media} <img src="" className /> */}
        <Typography  color="Secondary" gutterBottom>
         email:{res.email}
        </Typography>
        <Typography variant="h5" component="h2">
       firstname:{res.first_name}
        </Typography>
        <Typography color="Secondary">
         lastname:{res.last_name}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        
        </Typography>
      </CardContent> 
      
    </Card> }
        </>
    )
}
