function split(text, separator) {
    // Find the index of the first occurrence of separator
    let index = text.indexOf(separator);
  
    // Base case
    if (index === -1) {
      return [text];
    }
  
    // Find the substrings
    let start = text.substring(0, index);
    let rest = text.substring(index + 1);
  
    // Recursive call
    let restSolution = split(rest, separator);
  
    // Insert the first substring
    restSolution.unshift(start);
  
    return restSolution;
  }