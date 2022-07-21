import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const Company = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get("https://test.wertkt.com/api/result/").then((response) => {
      setResult(response.data);
    });
  }, []);
  return (
    <div>
      {result.map((elem) => {
        return (
          <Form.Group className="mb-3 mx-5">
            {/* <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-evenly">
                  <p>{elem.ebitda}</p> <p>{elem.loss}</p>
                  <button type="button" class="btn btn-warning">
                    <p>{elem.margin}</p>
                  </button>
                </div>
              </div> */}

            {/* <h5 class="card-title"> Test </h5> */}
            <div class="row d-flex justify-content-evenly">
              <div class="col-sm-4 ">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text ">
                      <p>{elem.ebitda}</p>
                      <p>{elem.ca}</p>
                      <p>{elem.loss}</p>
                      <p>{elem.margin}</p>
                      <p>{elem.year}</p>
                      <p>{elem.business}</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Form.Group>
        );
      })}
    </div>
  );
};

export default Company;
