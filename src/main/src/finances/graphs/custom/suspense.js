import React, { useState, Suspense, SuspenseList } from "react";
import Sucess from "./sucess";
import ErrorBoundary from "../../../../redux/ErrorBoundary";
import { wrapPromise } from "../../../../redux/wrapPromise";
import { createRequest } from "../../../../redux/actions/excel";
import LoadingLottie from "../../../lotties/loadingLottie";

export default function suspense({ data , setUp}) { 

  var makeRequest = request => createRequest(request);

  var resource = { result: wrapPromise(makeRequest(data)) }

  return (
    <Suspense fallback={<h1>loading..</h1>}>
      <Sucess resource={resource} setUp={setUp} />
    </Suspense>
  );
}
