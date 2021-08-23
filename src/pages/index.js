import { navigate } from "gatsby";
import { useState, useEffect } from "react";

export default function Home() {
  const [foo] = useState(false);

  useEffect(() => {
    if (foo) {
      navigate("never");
    }
  });

  return <div>Hello world!</div>;
}
