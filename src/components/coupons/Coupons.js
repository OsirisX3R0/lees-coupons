import { Container, Typography } from "@material-ui/core";
import { useContext } from "react";

import { CouponContext } from "../../context/CouponContext";
import Coupon from "./Coupon";

const Coupons = ({ redeemed }) => {
  const { coupons } = useContext(CouponContext);
  const oldHead = redeemed && (
    <Typography variant="h5">Redeemed Coupons</Typography>
  );

  const couponList =
    coupons && coupons.length
      ? coupons.reduce(
          (list, coupon) =>
            (redeemed && coupon.redeemed) || (!redeemed && !coupon.redeemed)
              ? [
                  ...list,
                  <Coupon
                    coupon={coupon}
                    key={coupon.id}
                    redeemed={redeemed}
                  />,
                ]
              : list,
          []
        )
      : null;

  const noCoupons =
    (!redeemed && coupons && coupons.every((c) => c.redeemed)) ||
    (redeemed && coupons && coupons.every((c) => !c.redeemed)) ? (
      <Typography
        sx={{
          color: "#bbb",
          textAlign: "center",
        }}
        variant="subtitle1"
      >
        No Coupons
      </Typography>
    ) : null;

  return (
    <Container sx={{ marginBottom: redeemed ? "72px" : "" }}>
      {oldHead}
      {couponList}
      {noCoupons}
    </Container>
  );
};

export default Coupons;
