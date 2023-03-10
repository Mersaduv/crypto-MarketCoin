import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

const CryptoItem = ({ coin }) => {
  return (
    <Link
      key={coin.id}
      href="/cryptoMarket/[coinId]"
      as={`/cryptoMarket/${coin.id}`}
    >
      <Card>
        <CardContent>
          <Typography variant="h5">{coin.name}</Typography>
          <Typography variant="subtitle1">{coin.symbol}</Typography>
          <Typography variant="body1">${coin.price_usd}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CryptoItem;
