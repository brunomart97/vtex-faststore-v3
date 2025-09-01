import { gql } from "@faststore/core/api";

//@ts-ignore
export const GET_CHECKOUT = gql(`
  query getCheckout {
    getCheckout {
      orderFormId
      salesChannel
      loggedIn
    }
  }
`);
