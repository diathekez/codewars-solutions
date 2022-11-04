// Extract the domain name from a URL
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// url = "https://www.cnet.com"                -> domain name = cnet"

function encodeDupes(str) {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .split(".")[0];
}
