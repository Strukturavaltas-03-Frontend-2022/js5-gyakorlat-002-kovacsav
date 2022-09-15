const validateMACAddress = (MACAddress = "") => {
  const MACAddressPattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return MACAddressPattern.test(MACAddress);
};

export default validateMACAddress;
