import { Button as UIButton } from "@faststore/ui";
import { useLazyQuery_unstable as useQuery } from "@faststore/core/experimental";
import { GET_CHECKOUT } from "./graphql/queries";

export function CustomButton() {
  const [getCheckout, { data }] = useQuery(GET_CHECKOUT);

  console.log("@@@ data", data);

  const handleClick = async () => await getCheckout();

  return (
    <UIButton variant="primary" onClick={handleClick}>
      Custom Button
    </UIButton>
  );
}
