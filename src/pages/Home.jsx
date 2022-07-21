import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Navbar from "../components/Navbar";

const Home = () => {
  const [biz, setBiz] = useState([]);

  useEffect(() => {
    axios.get("https://test.wertkt.com/api/biz/").then((response) => {
      setBiz(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div class="d-flex justify-content-evenly">
        <p>COMPANY</p>
        <p>N°SIREN</p>
        <p>CATEGORY</p>
      </div>
      {biz.map((elem) => {
        return (
          <Form.Group className="mb-3 mx-5">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-evenly">
                  <p>{elem.name}</p> <p>{elem.siren}</p>
                  <button type="button" class="btn btn-warning">
                    <p>{elem.sector}</p>
                  </button>
                </div>
              </div>
            </div>
          </Form.Group>
        );
      })}
    </div>
  );
};

export default Home;
