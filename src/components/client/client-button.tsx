"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

export function ClientButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Hello World");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Button
      variant="outline"
      className="mt-3"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading && <Spinner />}
      {isLoading ? "Loading..." : "Client Button"}
    </Button>
  );
}
