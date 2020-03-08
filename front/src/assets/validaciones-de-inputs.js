export const isValidName = name => {
  return !/^[A-Z\s?]+$/i.test(name);
};

export const isValidEmail = email => {
  return !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
    email
  );
};

export const isValidPassword = password => {
  return !/^(?=(?:.*(\d|[$@._&])){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{4,20}$/.test(
    password
  );
};
