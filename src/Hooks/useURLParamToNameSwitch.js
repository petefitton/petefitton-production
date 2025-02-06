function useURLParamToNameSwitch(urlParam) {
    switch(urlParam) {
      case "the-starting-of-something-new":
        return (
            "The Starting of Something New"
        );
    default:
        return (<></>);
    }
}
  
export default useURLParamToNameSwitch;