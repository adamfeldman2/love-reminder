export default (emailAddress) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(emailAddress);
};
