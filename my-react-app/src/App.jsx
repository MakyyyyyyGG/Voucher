import { useState, useEffect } from "react";
import JSConfetti from "js-confetti";
import "./App.css";
import { Button, Form, Input, Avatar } from "@heroui/react";
import { NavLink, Link } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const jsConfetti = new JSConfetti();

  const submit = (e) => {
    e.preventDefault();

    if (name.toLowerCase() === "hazel may costo cerafica") {
      console.log("Hello, " + name);
      setValidated(true);
    } else {
      console.log("You are not hazel may costo cerafica");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  const showVoucher = () => {
    setShow(true);
  };

  const handleClaim = () => {
    jsConfetti.addConfetti();
  };

  const SecondPage = () => {
    return (
      <div className="flex flex-col gap-4 ">
        {!show && (
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-lg font-bold  text-red-500  ">
              Will you Be My Valentine Babb? 🙏
            </h1>
            <div className="flex gap-4">
              <Button
                onPress={() => {
                  showVoucher();
                  handleClaim();
                }}
                color="success"
                variant="flat"
              >
                Yes
              </Button>
              <Button isDisabled color="danger" variant="flat">
                No
              </Button>
            </div>
          </div>
        )}

        {show && (
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-lg font-bold  text-red-500  ">
              Congratulations on choosing me as your Valentine. Here is your
              voucher hihi.
            </h1>
            <h1 className="text-lg font-bold  text-red-500 text-center">
              Iloveyouuu my Loveeyyyy 😘💋
            </h1>
            <div className="w-full flex justify-center items-center ">
              <img src="/voucher.png" alt="Voucher" height={500} width={500} />
            </div>
            <Button color="success" variant="bordered" onPress={handleClaim}>
              Claim
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {validated ? (
        <SecondPage />
      ) : (
        <Form onSubmit={submit} className="w-96">
          <label>Enter Full Name</label>
          <Input
            type="text"
            placeholder="Eg. Juan Dela Cruz"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {showError && (
            <p className="text-red-500 animate-bounce">Invalid name</p>
          )}
          {/* <label htmlFor="name">Name</label> */}
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}

export default App;
