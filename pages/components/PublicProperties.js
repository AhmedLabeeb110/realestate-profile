import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function PublicProperties({pp}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className={styles.cardBg}>
        <CardMedia
          component="img"
          height="140"
          image={pp.image}
          alt="Public Cards"
          sx={{ mb: 2 }}
        />
        <CardContent>
          <Typography gutterBottom className={styles.CardTtiles}>
            {pp.name}
          </Typography>
          <Typography className={styles.paragraph}>
            {pp.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="content"
            color="warning"
            className={styles.BtnStyles}
            sx={{ mb: 1 }}
          >
            Baca lebih Lanjut
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
