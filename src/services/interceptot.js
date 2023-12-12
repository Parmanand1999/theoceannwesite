const interceptorFunction = async (url, options) => {
  // const { isLoading, setIsLoading } = spinnerStore();

  const { setIsLoading, setButtonDisabled } = window.spinnerStoreFuntion();

  try {
    setIsLoading(true);
    setButtonDisabled(true);
    const response = await fetch(url, options);

    if (response.status === 401) {
      window.location.href = "/";
    }
    setIsLoading(false);
    setButtonDisabled(false);
    return response;
  } catch (error) {
    setIsLoading(false);
    setButtonDisabled(false);
    throw error;
    // alert(error);
  }
};

export default interceptorFunction;
