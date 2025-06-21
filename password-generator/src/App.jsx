import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pw = "";

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";
    if (isNumAllowed) chars += "1234567890";
    if (isCharAllowed) chars += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      pw += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(pw);
  }, [length, isNumAllowed, isCharAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-600">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg mb-4 overflow-hidden">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            id="length"
          />
          <label htmlFor="length" className="text-white">
            Length
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumAllowed}
            className="cursor-pointer"
            onChange={() =>
              setIsNumAllowed((prevIsNumAllowed) => !prevIsNumAllowed)
            }
            id="isNumAllowed"
          />
          <label htmlFor="isNumAllowed" className="text-white">
            Allow numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            className="cursor-pointer"
            onChange={() =>
              setIsCharAllowed((prevIsCharAllowed) => !prevIsCharAllowed)
            }
            id="isCharAllowed"
          />
          <label htmlFor="isCharAllowed" className="text-white">
            Allow specials
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
