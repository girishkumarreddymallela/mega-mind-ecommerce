import React, { useState } from "react";
import { Form, Button, Card, Col, Row, Image } from "react-bootstrap";

const SellerInput = ({ setsellerItem }) => {
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [shipping, setShipping] = useState("");
  const [returnPolicy, setReturnPolicy] = useState("");
  const [inventory, setInventory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !image ||
      !productName ||
      !description ||
      !category ||
      !price ||
      !shipping ||
      !returnPolicy ||
      !inventory
    ) {
      alert("Please fill in all the fields");

      return;
    }

    setImage("");
    setProductName("");
    setDescription("");
    setCategory("");
    setPrice("");

    setShipping("");
    setReturnPolicy("");
    setInventory("");
    setsellerItem([
      {
        image: image,
        productName: productName,
        description: description,
        category: category,
        price: price,
        shipping: shipping,
        returnPolicy: returnPolicy,
        inventory: inventory,
      },
    ]);
  };

  return (
    <Card className="p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="image">
          <Form.Label column sm="2">
            Image
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter any dummy URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="productName">
          <Form.Label column sm="2">
            Product Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter the product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="description">
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter the product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="category">
          <Form.Label column sm="2">
            Category
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter the product category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="price">
          <Form.Label column sm="2">
            Price
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter the price in USD"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="shipping">
          <Form.Label column sm="2">
            Shipping
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter the shipping details"
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="returnPolicy">
          <Form.Label column sm="2">
            Return Policy
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter the return policy"
              value={returnPolicy}
              onChange={(e) => setReturnPolicy(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="inventory">
          <Form.Label column sm="2">
            Inventory
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter the inventory quantity"
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {image && (
        <Card className="mt-3">
          <Card.Header>Preview</Card.Header>
          <Card.Body>
            <Image src={image} fluid />
            <Card.Title>${price}</Card.Title>
            <Card.Text>{inventory} in stock</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Card>
  );
};

export default SellerInput;
