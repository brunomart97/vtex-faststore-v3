import { BASE_URL } from "../../../../constants";

const checkoutResolver = {
  getCheckout: async () => {
    const url = `${BASE_URL}/api/checkout/pub/orderForm`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        return null;
      }

      return response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  },
};

export default checkoutResolver;
