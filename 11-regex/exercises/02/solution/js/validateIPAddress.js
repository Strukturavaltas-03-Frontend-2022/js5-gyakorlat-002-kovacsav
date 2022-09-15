const validateIPAddress = (IPAddress = "") => {
  const IPAddressPattern =
    /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[1-9])(\.(?!$)|$))((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){3}$/;
  ///^(([1]?[1-9]{1,2}|2[0-4]\d|25[0-5])\.)([0-1]?[0-9]{1,2}|2[0-4]\d|25[0-5])\.){2}([01]?\d{1,2}|2[0-4]\d|25[0-5])$/;
  //  /^(\\d{1,2}|(0|1)\\d{2}|2[0-4]\\d|25[0-5])$/
  return IPAddressPattern.test(IPAddress);
};

export default validateIPAddress;
