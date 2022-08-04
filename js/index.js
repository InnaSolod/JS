function checkForSpam(message) {
    let result;
    // Change code below this line
    const normalizedInput = message.toLowerCase ();
    console.log(normalizedInput)
    result = normalizedInput.includes('spam') || normalizedInput.includes('sale')
    // Change code above this line
    return result;
  }
  console.log(checkForSpam('Get best sale offers now!'))