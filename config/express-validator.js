module.exports = {
  customValidators: {
    notEmptyString: param => (param === "") ? false : true,
    mustBeDefined: param => (param === undefined) ? false : true,
    maxLength: (param, num) => (!param || param.length <= num) ? true : false,
    nullableDate: (param) => {
      if(param !== null && (!param || (new Date(param)) == 'Invalid Date')) return false;
      return true;
    }
  }
};
