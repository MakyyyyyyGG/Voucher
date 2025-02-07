import { useState } from "react";
import JSConfetti from "js-confetti";
import "./App.css";
import { Button, Form, Input } from "@heroui/react";

function App() {
  const [name, setName] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const jsConfetti = new JSConfetti();

  const submit = (e) => {
    e.preventDefault();
    if (name.toLowerCase() === "hazel may costo cerafica") {
      setValidated(true);
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  const showVoucher = () => setShow(true);
  const handleClaim = () => jsConfetti.addConfetti();

  const ValentinePage = () => {
    return (
      <div className="max-w-2xl mx-auto p-8 rounded-2xl shadow-lg bg-white">
        {!show ? (
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-3xl font-bold text-red-500 text-center animate-pulse">
              Will you be my Valentine? 💝
            </h1>
            <div className="flex gap-6">
              <Button
                onPress={() => {
                  showVoucher();
                  handleClaim();
                }}
                color="success"
                variant="shadow"
                size="lg"
                className="px-12 py-6 text-lg"
              >
                Yes! 💖
              </Button>
              <Button
                isDisabled
                color="danger"
                variant="flat"
                size="lg"
                className="px-12 py-6 text-lg opacity-50"
              >
                No
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            <div className="space-y-4 text-center">
              <h1 className="text-2xl font-bold text-red-500">
                Thank you for being my Valentine! 💑
              </h1>
              <p className="text-xl text-red-400">
                Here's a special gift just for you
              </p>
            </div>
            <div className="relative w-full  max-w-md rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src="/voucher.png"
                alt="Valentine's Voucher"
                className="object-cover "
              />
            </div>
            <Button
              color="success"
              variant="shadow"
              size="lg"
              onPress={handleClaim}
              className="px-8 py-4"
            >
              Claim Your Gift 🎁
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 p-4 flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        {validated ? (
          <ValentinePage />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center gap-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png"
                alt="Shopee Logo"
                className="w-20 h-30 object-cover"
              />
              <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
                Claim Your Exclusive Shopee Voucher
              </h1>
              <Form onSubmit={submit} className="w-full max-w-md space-y-4">
                <div className="space-y-2 w-full">
                  <label className="text-sm font-medium text-gray-700">
                    Please Enter Your Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name here"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full !min-w-full"
                    size="lg"
                  />
                  {showError && (
                    <p className="text-red-500 text-sm animate-bounce">
                      Please enter a valid name
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full"
                  variant="shadow"
                >
                  Verify & Continue
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
