import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

const ExchangesItem = ({ exg }) => {
  console.log(exg);
  return (
    <Link key={exg.id} href="/exchanges/[spotId]" as={`/exchanges/${exg.id}`}>
      <Card>
        <CardContent>
          <Typography variant="h5">{exg.name}</Typography>
          {/* <Typography variant="subtitle1">{exg.symbol}</Typography> */}
          <Typography variant="body1">Rank : {exg.trust_score_rank}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ExchangesItem;
