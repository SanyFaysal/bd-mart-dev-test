import Link from "next/link";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Header from "../components/Shared/Header/Header";
import Layout from "../components/Layout";
import Image from "next/image";

const Cart = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const cartItems = [
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 20, quantity: 1 },
    { id: 3, name: "Product 3", price: 5, quantity: 4 },
  ];
  const removeFromCart = () => {
    // console.log('removed');
  };

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <Layout title="Cart - Bangladesh Mart">
      <div style={{ minHeight: "120vh" }}>
        <Header></Header>
        <div className="container">
          <Table responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image
                    layout="responsive"
                    width={60}
                    height={60}
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
                    className=" "
                    alt=""
                  />
                </td>
                <td>
                  <h5>Mango art</h5>
                </td>
                <td>$57</td>
                <td>
                  <button
                    onClick={handleDecrement}
                    style={{ padding: "0 3px", border: "none" }}
                    className=""
                  >
                    -
                  </button>
                  <input
                    style={{ width: "25px" }}
                    className="text-center border-0"
                    type="text"
                    value={count}
                  />
                  <button
                    onClick={handleIncrement}
                    style={{ padding: "0 3px", border: "none" }}
                  >
                    +
                  </button>
                </td>
                <td>$ {count * 57}</td>
                <td>
                  <button
                    style={{ padding: "0 5px" }}
                    className="text-danger border-0"
                  >
                    X
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    layout="responsive"
                    width={60}
                    height={60}
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
                    className=" "
                    alt=""
                  />
                </td>
                <td>
                  <h5>Mango art</h5>
                </td>
                <td>$57</td>
                <td>
                  <button
                    onClick={handleDecrement}
                    style={{ padding: "0 3px", border: "none" }}
                    className=""
                  >
                    -
                  </button>
                  <input
                    style={{ width: "25px" }}
                    className="text-center border-0"
                    type="text"
                    value={count}
                  />
                  <button
                    onClick={handleIncrement}
                    style={{ padding: "0 3px", border: "none" }}
                  >
                    +
                  </button>
                </td>
                <td>$ {count * 57}</td>
                <td>
                  <button
                    style={{ padding: "0 5px" }}
                    className="text-danger border-0"
                  >
                    X
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    layout="responsive"
                    width={60}
                    height={60}
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
                    className=" "
                    alt=""
                  />
                </td>
                <td>
                  <h5>Mango art</h5>
                </td>
                <td>$57</td>
                <td>
                  <button
                    onClick={handleDecrement}
                    style={{ padding: "0 3px", border: "none" }}
                    className=""
                  >
                    -
                  </button>
                  <input
                    style={{ width: "25px" }}
                    className="text-center border-0"
                    type="text"
                    value={count}
                  />
                  <button
                    onClick={handleIncrement}
                    style={{ padding: "0 3px", border: "none" }}
                  >
                    +
                  </button>
                </td>
                <td>$ {count * 57}</td>
                <td>
                  <button
                    style={{ padding: "0 5px" }}
                    className="text-danger border-0"
                  >
                    X
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    layout="responsive"
                    width={60}
                    height={60}
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
                    className=" "
                    alt=""
                  />
                </td>
                <td>
                  <h5>Mango art</h5>
                </td>
                <td>$57</td>
                <td>
                  <button
                    onClick={handleDecrement}
                    style={{ padding: "0 3px", border: "none" }}
                    className=""
                  >
                    -
                  </button>
                  <input
                    style={{ width: "25px" }}
                    className="text-center border-0"
                    type="text"
                    value={count}
                  />
                  <button
                    onClick={handleIncrement}
                    style={{ padding: "0 3px", border: "none" }}
                  >
                    +
                  </button>
                </td>
                <td>$ {count * 57}</td>
                <td>
                  <button
                    style={{ padding: "0 5px" }}
                    className="text-danger border-0"
                  >
                    X
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex justify-content-between">
            <Link
              className="btn bg-dark py-2 px-4 text-white text-decoration-none"
              href="/"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="mr-[5px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="48"
                  d="M244 400L100 256l144-144M120 256h292"
                ></path>
              </svg>{" "}
              Continue Shopping
            </Link>
            <button
              className=" btn bg-white border border-dark border-2 py-2 px-4 text-dark text-decoration-none"
              href="/"
            >
              Clear Cart
            </button>
          </div>

          <div className="d-flex justify-content-between">
            <div className="coupon mt-5">
              <h4>Coupon Discount</h4>
              <h6>Enter your coupon code if you have one.</h6>
              <input
                style={{ border: "1px solid #ddd", outline: "none" }}
                className="px-4 py-2 "
                type="text"
                placeholder="Coupon code"
              />{" "}
              <br />
              <button
                className="mt-3 btn bg-dark border border-dark border-2 py-2 px-4 text-white text-decoration-none"
                href="/"
              >
                Apply Coupon
              </button>
            </div>
            <div>
              <div
                style={{ minWidth: "250px", border: "1px solid #ddd" }}
                className="subtotal mt-5 px-4 py-3"
              >
                <li className="d-flex justify-content-between">
                  <span className="fw-bold">Subtotal:</span>
                  <span>$250</span>
                </li>
                <hr />
                <li className="d-flex justify-content-between">
                  <span className="fw-bold">Total:</span>
                  <span>$350</span>
                </li>
              </div>
              <button
                className="mt-3 btn bg-dark border border-dark border-2 py-2 px-5 text-white text-decoration-none"
                href="/"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default Cart;
