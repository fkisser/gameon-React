import axios from "axios";
import { errorOrder, loadedOrder, loadingOrder } from "../redux/order/orderSlice";
import { addItems } from "../redux/cart/cartSlice";
import { addCheckoutOrder, clearOrder } from "../redux/checkout/checkoutSlice";
import { loadOrders, loadingUserOrders } from "../redux/user/userSlice";

export const checkoutOrder = async (dispatch, token) => {
  dispatch(loadingOrder());
  try {
    let response = await axios({
      url: 'https://integrador-back-ten.vercel.app/orders/status/cart',
      method: 'get',
      headers: { 'x-token': token },
    })
    const order = response.data.orders[0];
    response = await axios({
      url: `https://integrador-back-ten.vercel.app/orders/${order._id}`,
      method: 'put',
      headers: { 'x-token': token },
      data: { ...order, status: "checkout" }
    });
    dispatch(addCheckoutOrder(response.data.order));
    dispatch(loadedOrder());
    return;
  }
  catch (err) {
    dispatch(errorOrder("Error al enviar la orden a checkout"));
  };
}
export const backToCartOrder = async (dispatch, token) => {
  dispatch(loadingOrder());
  try {
    let response = await axios({
      url: 'https://integrador-back-ten.vercel.app/orders/status/checkout',
      method: 'get',
      headers: { 'x-token': token },
    })
    const order = response.data.orders[0];
    response = await axios({
      url: `https://integrador-back-ten.vercel.app/orders/${order._id}`,
      method: 'put',
      headers: { 'x-token': token },
      data: { ...order, status: "cart" }
    });
    const { items } = response.data.order;
    const cartItems = items.map((item) => {
      const cartItem = {
        id: item.product._id,
        url: item.product.url,
        title: item.product.title,
        price: item.product.price,
        quantity: item.quantity,
      }
      return cartItem;
    })
    dispatch(clearOrder());
    dispatch(loadedOrder());
    dispatch(addItems(cartItems));
    return;
  }
  catch (err) {
    dispatch(errorOrder("Error al enviar la orden al carrito"));
  };
}
export const pendingOrder = async (dispatch, token, values) => {
  dispatch(loadingOrder());
  try {
    let response = await axios({
      url: 'https://integrador-back-ten.vercel.app/orders/status/checkout',
      method: 'get',
      headers: { 'x-token': token },
    })
    const order = response.data.orders[0];
    response = await axios({
      url: `https://integrador-back-ten.vercel.app/orders/${order._id}`,
      method: 'put',
      headers: { 'x-token': token },
      data: { ...order, status: "pending", shippingDetails: { ...values } }
    });
    dispatch(clearOrder());
    dispatch(loadedOrder());
    return;
  }
  catch (err) {
    dispatch(errorOrder("Error al enviar la orden a la sucursal"));
  };
}

export const loadCheckoutOrder = async (dispatch, token) => {
  dispatch(loadingOrder());
  try {
    const response = await axios({
      url: 'https://integrador-back-ten.vercel.app/orders/status/checkout',
      method: 'get',
      headers: { 'x-token': token }
    })
    if (!response.data.orders.length) {
      dispatch(errorOrder("No se encontró ninguna órden para checkout"));
      return;
    };
    const order = response.data.orders[0];
    dispatch(addCheckoutOrder(order));
    dispatch(loadedOrder());
    return;
  }
  catch (err) {
    dispatch(errorOrder("Error en la carga de órdenes"));
  };
};

export const loadCartOrder = async (dispatch, token) => {
  dispatch(loadingOrder());
  try {
    const response = await axios({
      url: 'https://integrador-back-ten.vercel.app/orders/status/cart',
      method: 'get',
      headers: { 'x-token': token }
    })
    if (!response.data.orders.length) {
      dispatch(errorOrder("No se encontró ninguna órden para el carrito"));
      dispatch(addItems([]));
      return;
    };
    const { items } = response.data.orders[0];
    const cartItems = items.map((item) => {
      const cartItem = {
        id: item.product._id,
        url: item.product.url,
        title: item.product.title,
        price: item.product.price,
        quantity: item.quantity,
      }
      return cartItem;
    })
    dispatch(loadedOrder());
    dispatch(addItems(cartItems));
  }
  catch (err) {
    dispatch(errorOrder("Error en la carga de órdenes"));
    dispatch(addItems([]));
  };
};

export const loadUserOrders = async (dispatch, token) => {
  dispatch(loadingUserOrders());
  dispatch(loadOrders([]));
  try {
    const response = await axios({
      url: 'https://integrador-back-ten.vercel.app/orders/',
      method: 'get',
      headers: { 'x-token': token }
    })
    if (!response.data.orders.length) {
      dispatch(errorOrder("No se encontró ninguna órden para el usuario"));
      dispatch(loadOrders([]));
      return;
    };
    const { orders } = response.data;
    dispatch(loadedOrder());
    dispatch(loadOrders(orders));
  }
  catch (err) {
    dispatch(errorOrder("Error en la carga de órdenes"));
    dispatch(loadOrders([]));
  };
};

export const updateCartOrder = async (dispatch, token, cartItems, price) => {
  dispatch(loadingOrder());
  const items = cartItems.map((cartItem) => {
    const item = {
      product: cartItem.id,
      quantity: cartItem.quantity
    }
    return item;
  });
  const data = { items, price };
  try {
    let response = await axios({
      url: 'https://integrador-back-ten.vercel.app/orders/status/cart',
      method: 'get',
      headers: { 'x-token': token },
    })
    if (!response.data.orders.length) {
      response = await axios({
        url: 'https://integrador-back-ten.vercel.app/orders/',
        method: 'post',
        headers: { 'x-token': token },
        data: { ...data, status: "cart" }
      });
      dispatch(loadedOrder());
      return;
    };
    const { _id } = response.data.orders[0];
    if (!cartItems.length) {
      response = await axios({
        url: `https://integrador-back-ten.vercel.app/orders/${_id}`,
        method: 'delete',
        headers: { 'x-token': token },
      });
      dispatch(loadedOrder());
      return;
    }
    response = await axios({
      url: `https://integrador-back-ten.vercel.app/orders/${_id}`,
      method: 'put',
      headers: { 'x-token': token },
      data: { ...data }
    });
    dispatch(loadedOrder());
    return;
  }
  catch (err) {
    dispatch(errorOrder("Error en la búsqueda de órdenes"));
  };
};

export const deleteCartOrder = async (dispatch, token) => {
  dispatch(loadingOrder());
  try {
    let response = await axios({
      url: 'https://integrador-back-ten.vercel.app/orders/status/cart',
      method: 'get',
      headers: { 'x-token': token },
    })
    if (!response.data.orders.length) {
      dispatch(loadedOrder());
      return;
    };
    const { _id } = response.data.orders[0];

    response = await axios({
      url: `https://integrador-back-ten.vercel.app/orders/${_id}`,
      method: 'delete',
      headers: { 'x-token': token },
    });
    dispatch(loadedOrder());
    return;
  }
  catch (err) {
    dispatch(errorOrder("No se pudo eliminar la órden"));
  };
};
export const deleteOrder = async (dispatch, token, id) => {
  try {
    let response = await axios({
      url: `https://integrador-back-ten.vercel.app/orders/${id}`,
      method: 'delete',
      headers: { 'x-token': token },
    });
    dispatch(loadOrders([]));
    dispatch(loadingUserOrders());
    dispatch(loadedOrder());
    return;
  }
  catch (err) {
    dispatch(errorOrder("No se pudo eliminar la órden"));
  };
};

