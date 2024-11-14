"use client";

import { Field, Label, Switch } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import GridBooksComponent from "./grid-books.component";

export default function LandingFormComponent() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div>
      <div
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="">
          <GridBooksComponent/>
        </div>
        
      </div>
    </div>
  );
}
