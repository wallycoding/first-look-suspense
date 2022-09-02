enum SuspensePromised {
  Pending = "pending",
  Success = "success",
  Error = "error",
}

const wrapSuspense = <T>(promise: Promise<T>) => {
  let result: T,
    status: SuspensePromised = SuspensePromised.Pending;
  const suspender = promise
    .then((response) => {
      status = SuspensePromised.Success;
      result = response;
    })
    .catch((error) => {
      status = SuspensePromised.Error;
      result = error;
    });

  return () => {
    switch (status) {
      case SuspensePromised.Pending:
        throw suspender;
      case SuspensePromised.Error:
        throw result;
      case SuspensePromised.Success:
        return result;
    }
  };
};

export default wrapSuspense;
