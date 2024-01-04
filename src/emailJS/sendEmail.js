import emailjs from "@emailjs/browser";

export const sendOrderEmail = (order) => {
  const template_id = "template_08xzcns";
  const service_id = "service_3rsannw";
  const public_key = "_u9ZgN-j_wqxJ5mZK";
  let str = "";
  const items = () => {
    order.items.map((item) => {
      const { product, quantity } = item;
      str += `${product.title} x ${quantity} = $${product.price} \n`;
    })
    return str;
  }
  str = items();
  const templateParams = {
    id: order._id,
    name: order.shippingDetails.name,
    lname: order.shippingDetails.lname,
    dni: order.shippingDetails.dni,
    mail: order.shippingDetails.mail,
    address: order.shippingDetails.address,
    details: order.shippingDetails.details,
    items: str,
    subtotal: order.price,
    shippingCost: order.shippingCost,
    total: order.total,
  }
  emailjs.send(service_id, template_id, templateParams, public_key);
};